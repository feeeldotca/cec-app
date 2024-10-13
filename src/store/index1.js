import { createPinia, defineStore } from 'pinia';
import { tables } from './tables.js';

export const useLoadStore = defineStore('load', {
  state: () => ({
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
    tables: tables,
    cableTypes: [],
    //tables.table6A.cableType.concat(tables.table6B.cableType).concat(tables.table6C.cableType).concat( tables.table6D.cableType).concat( tables.table6E.cableType).concat( tables.table6F.cableType).concat(tables.table6G.cableType).concat( tables.table6H.cableType).concat(tables.table6I.cableType).concat(tables.table6J.cableType).concat(tables.table6K.cableType),
    volRating: 0,
    selectedWireType: 'R90XLPE_UNJACKETED_600V',
    wireSize: '14',
    conduitSize: '21',
    numConductors: 1,
    totalWireArea: 0,
    conduitArea: 0,
    isFillValid: false,
    wireType: '',
    wireDiameter: 0,
    wireArea: 0,
    totalArea: null,
    selectedCable: null,
    slectedVolRating: null,
    selectedWireSize: null,
    wireCount: 1
  }),
  getters: {
    // Automatically calculate the total wire area
    totalWireArea(state) {
      const wireTypeTable = state.findWireTypeTable(state.selectedWireType);
      const wireData = tables.table6.wireSpecs[wireTypeTable]?.strandedConductors[state.wireSize];
      if (wireData) {
        const wireArea = (wireData.diameter ** 2 * Math.PI) / 4;
        return wireArea * state.numConductors;
      }
      return 0;
    },
    // Automatically calculate the conduit area
    conduitArea(state) {
      const conduitData = tables.table9.rigidMetalConduit[state.conduitSize];
      if (conduitData) {
        return (conduitData.diameter ** 2 * Math.PI) / 4;
      }
      return 0;
    },
    // Automatically check if the fill is valid
    isFillValid(state) {
      const maxFillPercentage = 0.4; // 40% max fill percentage
      return state.totalWireArea <= state.conduitArea * maxFillPercentage;
    }
  },
  actions: {
    // 查找 wiretype 所属的表
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

    // Setters to update state
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
    // 计算单根导线的面积
    calculateWireArea(diameter) {
      const radius = diameter / 2;
      console.log("find radius ", radius);
      return Math.PI * Math.pow(radius, 2);
    },

    // 计算总面积
    calculateTotalArea(diameter, count) {
      const singleWireArea = this.calculateWireArea(diameter);
      console.log("single wire area: ", singleWireArea);
      return singleWireArea * count;
    },
    calculateTotalLoad() {
      const totalLivingArea = this.aboveGroundFloorArea + (this.belowGroundFloorArea * 0.75);
      let totalLoad = 5000; // Base load for the first 90 m²
      if (totalLivingArea > 90) {
        totalLoad += Math.ceil((totalLivingArea - 90) / 90) * 1000;
      }
      this.totalLoad = totalLoad;
    },

    calculateHeatingLoad(heatingLoad) {
      if (heatingLoad <= 10) {
        this.heatingLoad = heatingLoad * 1000;
      } else {
        this.heatingLoad = 10000 + (heatingLoad - 10) * 750;
      }
    },

    calculateACLoad(acLoad) {
      this.acLoad = acLoad * 1000;
    },

    determineLargerLoad() {
      this.largerLoad = Math.max(this.heatingLoad, this.acLoad);
    },

    calculateRangeLoad(rangeLoad) {
      if (rangeLoad <= 12) {
        this.rangeLoad = 6000;
      } else {
        this.rangeLoad = 6000 + (rangeLoad - 12) * 400;
      }
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
        if (additionalLoads <= 6000) {
          this.additionalLoads = additionalLoads;
        } else {
          this.additionalLoads = 6000 + (additionalLoads - 6000) * 0.25;
        }
      }
    },

    calculateFinalLoad() {
      this.finalLoad = this.totalLoad + this.largerLoad + this.rangeLoad + this.waterHeaterLoad + this.evLoad + this.additionalLoads;
    },


    // Determine Feeder Size: Function to determine the required feeder size based on the corrected ampacity.
    determineServiceFeederLoad() {
      if (this.aboveGroundFloorArea < 80 && this.finalLoad < 14400) {
        this.finalLoad = 14400;
      } else if (this.aboveGroundFloorArea >= 80 && this.finalLoad < 24000) {
        this.finalLoad = 24000;
      }
    },

    determineFeederSize(load) {
      const voltage = 240; // Assuming a voltage of 240V
      console.log("Load is: ", load);
      const current = load / voltage;
      console.log("current is: ", current);
      // Apply correction factors
      const ambientTemperature = 40; // Example ambient temperature
      const insulationRating = this.temperature; // Example insulation rating '75c'
      const tempEntry = this.tables.table5a.find(
        (entry) => entry.ambientTemperature === ambientTemperature
      );
      console.log("tempEntry is: ", tempEntry);
      const correctionFactorTemp = tempEntry ? tempEntry.correctionFactors[insulationRating] : 1;

      const numberOfConductors = 3; // Example number of conductors
      const conductorEntry = this.tables.table5b.find(
        (entry) => entry.numberOfConductors === numberOfConductors
      );
      const correctionFactorConductors = conductorEntry ? conductorEntry.correctionFactor : 1;
      console.log("correctionFactorTemp:", correctionFactorTemp);
      console.log("correctionFactorConductors:", correctionFactorConductors);
      const correctedAmpacity = current / (correctionFactorTemp * correctionFactorConductors);
      console.log("correctedAmpacity: ", correctedAmpacity);
      // Select the wire size based on corrected ampacity
      const wireTable = this.conductorMaterial === 'copper' ? this.tables.table2 : this.tables.table4;
      console.log("wireTable: ", wireTable);
      const tempTable = wireTable.degree.find(
        (entry) => entry.temp === this.temperature
      );
      console.log("tempTable: ", tempTable);
      if (!tempTable) {
        this.feederSize = 'Unknown';
        return;
      }
      const wireEntry = tempTable.amps.find((amp) => amp >= correctedAmpacity);
      console.log("wireEntry: ", wireEntry);
      const wireSizeIndex = tempTable.amps.indexOf(wireEntry);
      console.log("wireSizeIndex: ", wireSizeIndex);
      this.feederSize = wireTable.wireSize[wireSizeIndex] || 'Unknown';
    },

    //calculateMaxRunDistance Function: Calculates the maximum run distance for a given wire type, size, current, voltage, and voltage drop.

    calculateMaxRunDistance(wireSize, current, voltage, voltageDrop, insulationTemp, percentageAmpacity) {
      const tableD3 = this.tables.tableD3;
      const tableD3b = this.tables.tableD3b;
      // wireType="copper", 
      // Find the distance for the given current and wire size
      const distanceEntry = tableD3.find(entry => entry.current >= current);
      if (!distanceEntry) {
        return 'Unknown';
      }
      const distance = distanceEntry.distances[wireSize];
      if (!distance) {
        return 'Unknown';
      }

      // Find the correction factor for the given insulation temperature and percentage of allowable ampacity
      const correctionEntry = tableD3b.find(entry => entry.insulationTemperature === insulationTemp);
      if (!correctionEntry) {
        return 'Unknown';
      }
      const correctionFactor = correctionEntry.correctionFactors[percentageAmpacity];
      if (!correctionFactor) {
        return 'Unknown';
      }

      // Calculate the maximum run distance
      const maxRunDistance = (distance * correctionFactor * (voltage / 120) * (voltageDrop / 100)).toFixed(2);
      return maxRunDistance;
    },


    //calculateVoltageDrop Function: Calculates the voltage drop for a given run distance, wire type, size, current, and voltage.
    calculateVoltageDrop(wireSize, current, voltage, runDistance, insulationTemp, percentageAmpacity) {
      const tableD3 = this.tables.tableD3;
      const tableD3b = this.tables.tableD3b;
      // wireType="copper", 
      // Find the distance for the given current and wire size
      const distanceEntry = tableD3.find(entry => entry.current >= current);
      if (!distanceEntry) {
        return 'Unknown';
      }
      const distance = distanceEntry.distances[wireSize];
      if (!distance) {
        return 'Unknown';
      }

      // Find the correction factor for the given insulation temperature and percentage of allowable ampacity
      const correctionEntry = tableD3b.find(entry => entry.insulationTemperature === insulationTemp);
      if (!correctionEntry) {
        return 'Unknown';
      }
      const correctionFactor = correctionEntry.correctionFactors[percentageAmpacity];
      if (!correctionFactor) {
        return 'Unknown';
      }

      // Calculate the voltage drop
      const voltageDrop = (runDistance / (distance * correctionFactor * (voltage / 120))) * 100;
      return voltageDrop.toFixed(0);
    }
  }
});

const pinia = createPinia();
export default pinia;
