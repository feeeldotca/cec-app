import { createPinia, defineStore } from 'pinia';
import { tables } from './tables.js';

export const useLoadStore = defineStore('load', {
  state: () => ({
    // === LoadCalculator.vue Specific State ===
    aboveGroundFloorArea: 0,
    belowGroundFloorArea: 0,
    heatingLoad: 0,
    acLoad: 0,
    rangeLoad: 0,
    waterHeaterLoad: 0,
    evLoad: 0,
    additionalLoads: 0,
    totalLoad: 0,
    largerLoad: 0,
    finalLoad: 0,
    feederSize: '',
    conductorMaterial: 'copper', // Default to copper
    temperature: '75c', // Default temperature

    // === ConduitFillCalculator.vue Specific State ===
    selectedWireType: 'R90XLPE_UNJACKETED_600V',
    wireSize: '14',
    conduitSize: '21',
    numConductors: 1,

    // === Common/Shared State (Used by Multiple Components) ===
    tables: tables, // Shared lookup tables
    volRating: 0, // Voltage rating used across components
    wireCount: 1, // Used across multiple components
  }),

  getters: {
    // === ConduitFillCalculator.vue Specific Getters ===
    totalWireArea(state) {
      const wireTypeTable = state.findWireTypeTable(state.selectedWireType);
      const wireData = tables.table6.wireSpecs[wireTypeTable]?.strandedConductors[state.wireSize];
      if (wireData) {
        const wireArea = (wireData.diameter ** 2 * Math.PI) / 4;
        return wireArea * state.numConductors;
      }
      return 0;
    },
    conduitArea(state) {
      const conduitData = tables.table9.rigidMetalConduit[state.conduitSize];
      if (conduitData) {
        return (conduitData.diameter ** 2 * Math.PI) / 4;
      }
      return 0;
    },
    isFillValid(state) {
      const maxFillPercentage = 0.4; // 40% max fill percentage
      return state.totalWireArea <= state.conduitArea * maxFillPercentage;
    },

    // === LoadCalculator.vue Specific Getters ===
    // These can be added if needed in the future
  },

  actions: {
    // === Shared/Reusable Actions ===
    updateState(key, value) {
      this[key] = value;
    },
    calculateArea(diameter, count = 1) {
      const radius = diameter / 2;
      const area = Math.PI * Math.pow(radius, 2);
      return area * count;
    },
    findWireTypeTable(wireType) {
      for (const [table, types] of Object.entries(tables.table6.wireTypes)) {
        if (Array.isArray(types) && types.includes(wireType)) {
          return table;
        } else if (types === wireType) {
          return table;
        }
      }
      return null;
    },

    // === ConduitFillCalculator.vue Specific Actions ===
    setSelectedWireType(wireType) {
      this.selectedWireType = wireType;
    },
    setWireSize(size) {
      this.wireSize = size;
    },
    setConduitSize(size) {
      this.conduitSize = size;
    },
    setNumConductors(count) {
      this.numConductors = count;
    },
     // Helper to check if the conduit fill is valid
     calculateConduitFill(totalWireArea, conduitArea, maxFillPercentage = 0.4) {
      return totalWireArea <= conduitArea * maxFillPercentage;
    },

    // === LoadCalculator.vue Specific Actions ===
    calculateTotalLoad() {
      const totalLivingArea = this.aboveGroundFloorArea + (this.belowGroundFloorArea * 0.75);
      let totalLoad = 5000; // Base load for the first 90 m²
      if (totalLivingArea > 90) {
        totalLoad += Math.ceil((totalLivingArea - 90) / 90) * 1000;
      }
      this.totalLoad = totalLoad;
    },
    calculateHeatingLoad(heatingLoad) {
      this.heatingLoad = heatingLoad <= 10 ? heatingLoad * 1000 : 10000 + (heatingLoad - 10) * 750;
    },
    calculateACLoad(acLoad) {
      this.acLoad = acLoad * 1000;
    },
    determineLargerLoad() {
      this.largerLoad = Math.max(this.heatingLoad, this.acLoad);
    },
    calculateRangeLoad(rangeLoad) {
      this.rangeLoad = rangeLoad <= 12 ? 6000 : 6000 + (rangeLoad - 12) * 400;
    },
    calculateWaterHeaterLoad(waterHeaterLoad) {
      this.waterHeaterLoad = waterHeaterLoad * 1000;
    },
    calculateEVLoad(evLoad) {
      this.evLoad = evLoad * 1000;
    },
    calculateAdditionalLoads(additionalLoads, hasRange) {
      if (hasRange) {
        this.additionalLoads = additionalLoads * 0.25;
      } else {
        this.additionalLoads = additionalLoads <= 6000 ? additionalLoads : 6000 + (additionalLoads - 6000) * 0.25;
      }
    },
    calculateFinalLoad() {
      this.finalLoad = this.totalLoad + this.largerLoad + this.rangeLoad + this.waterHeaterLoad + this.evLoad + this.additionalLoads;
    },

    determineServiceFeederLoad() {
      if (this.aboveGroundFloorArea < 80 && this.finalLoad < 14400) {
        this.finalLoad = 14400;
      } else if (this.aboveGroundFloorArea >= 80 && this.finalLoad < 24000) {
        this.finalLoad = 24000;
      }
    },
    determineFeederSize(load) {
      const voltage = 240;
      const current = load / voltage;
      const ambientTemperature = 40;
      const insulationRating = this.temperature;
      const tempEntry = this.tables.table5a.find((entry) => entry.ambientTemperature === ambientTemperature);
      const correctionFactorTemp = tempEntry ? tempEntry.correctionFactors[insulationRating] : 1;

      const numberOfConductors = 3;
      const conductorEntry = this.tables.table5b.find((entry) => entry.numberOfConductors === numberOfConductors);
      const correctionFactorConductors = conductorEntry ? conductorEntry.correctionFactor : 1;

      const correctedAmpacity = current / (correctionFactorTemp * correctionFactorConductors);

      const wireTable = this.conductorMaterial === 'copper' ? this.tables.table2 : this.tables.table4;
      const tempTable = wireTable.degree.find((entry) => entry.temp === this.temperature);

      if (!tempTable) {
        this.feederSize = 'Unknown';
        return;
      }

      const wireEntry = tempTable.amps.find((amp) => amp >= correctedAmpacity);
      const wireSizeIndex = tempTable.amps.indexOf(wireEntry);
      this.feederSize = wireTable.wireSize[wireSizeIndex] || 'Unknown';
    },

    // === Shared/Reusable Actions for Distance & Voltage Calculations ===
    calculateMaxRunDistance(wireSize, current, voltage, voltageDrop, insulationTemp, percentageAmpacity) {
      const distanceEntry = this.tables.tableD3.find(entry => entry.current >= current);
      if (!distanceEntry) return 'Unknown';

      const correctionEntry = this.tables.tableD3b.find(entry => entry.insulationTemperature === insulationTemp);
      if (!correctionEntry) return 'Unknown';

      const correctionFactor = correctionEntry.correctionFactors[percentageAmpacity];
      return (distanceEntry.distances[wireSize] * correctionFactor * (voltage / 120) * (voltageDrop / 100)).toFixed(2);
    },

    calculateVoltageDrop(wireSize, current, voltage, runDistance, insulationTemp, percentageAmpacity) {
      const distanceEntry = this.tables.tableD3.find(entry => entry.current >= current);
      if (!distanceEntry) return 'Unknown';

      const correctionEntry = this.tables.tableD3b.find(entry => entry.insulationTemperature === insulationTemp);
      if (!correctionEntry) return 'Unknown';

      const correctionFactor = correctionEntry.correctionFactors[percentageAmpacity];
      return ((runDistance / (distanceEntry.distances[wireSize] * correctionFactor * (voltage / 120))) * 100).toFixed(0);
    }
  }
});

const pinia = createPinia();
export default pinia;
