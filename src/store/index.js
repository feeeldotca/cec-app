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
    // totalWireArea: 0,
    // conduitArea: 0,
    isFillValid: false,
    maxWireCount: 200, // 最大导线数量限制
    // === ConduitFillCalculator.vue Specific State ===
    selectedWireType: 'R90XLPE_UNJACKETED_600V',
    wireSize: '14',
    conduitSize: '21',
    numConductors: 1,
    // maxFillPercentage: 0.53,
    totalAreas: [], // 存储每次导线面积
    totalWireCount: 0, // 存储导线的总根数
    selectedConduitType: 'rigidMetalConduit', // Default to the first conduit type
    strandOrSolidWire: 'strandedConductors', //solidConductors
    showConductorSelection: true,
    result: false,
    // === Common/Shared State (Used by Multiple Components) ===
    tables: tables, // Shared lookup tables
    volRating: 0, // Voltage rating used across components
    wireCount: 1, // Used across multiple components
  }),

  getters: {
    // === ConduitFillCalculator.vue Specific Getters ===
    // totalWireArea(state) {
    //   const wireTypeTable = state.findWireTypeTable(state.selectedWireType);
    //   console.log("wire table is: ", wireTypeTable);
    //   const wireData = tables.table6.wireData[wireTypeTable]?.specs.strandedConductors[state.wireSize];
    //   console.log("wireData is: ",  tables.table6.wireData);
    //   if (wireData) {
    //     const wireArea = (wireData.diameter ** 2 * Math.PI) / 4;
    //     return wireArea * state.numConductors;
    //   }
    //   return 0;
    // },

    getTotalWireArea() {
      const wireTypeTable = this.findWireTypeTable(this.selectedWireType);
      if (!wireTypeTable || !this.tables.table6.wireData.has(wireTypeTable)) {
        return 0;
      }

      const wireSpecs = this.tables.table6.wireData.get(wireTypeTable).specs.strandedConductors.get(this.wireSize);
      if (!wireSpecs) {
        return 0;
      }

      return this.calculateArea(wireSpecs.diameter, this.numConductors);
    },

    getConduitArea(state) {
      const conduitData = tables.table9.rigidMetalConduit[state.conduitSize];
      if (conduitData) {
        return ((conduitData.diameter ** 2 * Math.PI) / 4).toFixed(0);
      }
      return 0;
    },

    accumulatedWireArea(state) {
      return state.totalAreas.reduce((sum, area) => sum + area, 0);
    },
    // 判断是否在允许的填充范围内
    isTotalFillValid(state) {
      const maxFillPercentage = 0.4; // 40% 填充比例
      return state.accumulatedWireArea <= state.conduitArea * maxFillPercentage;
    },
    // 检查导线总数是否超过200
    isWireCountValid(state) {
      return state.totalWireCount <= state.maxWireCount;
    },

    // getIsFillValid(state) {
    //   this.maxFillPercentage = this.calculateMaxFillPercentage(state.numConductors, state.isLeadSheathed);
    //   return state.totalWireArea <= state.conduitArea * this.maxFillPercentage;
    // },


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
      return (area * count).toFixed(2);
    },

    findWireTypeTable(wireType) {
      for (const [table, data] of tables.table6.wireData.entries()) {
        if (data.types.has(wireType)) {
          return table;
        }
      }
      return null;
    },

    // 添加导线截面积和根数
    addWireArea(newArea, wireCount) {
      this.totalAreas.push(newArea); // 将导线截面积加入数组
      this.totalWireCount += wireCount; // 累加导线的根数
    },

    // 清空所有已添加的导线
    clearAreas() {
      this.totalAreas = []; // 清空面积
      this.totalWireCount = 0; // 清空导线数量
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


    calculateMaxFillPercentage(numConductors, isLeadSheathed = false) {
      let maxFillPercent;

      // For non-lead-sheathed cables
      if (!isLeadSheathed) {
        if (numConductors === 1) {
          maxFillPercent = 0.53; // 53% for 1 conductor
        } else if (numConductors === 2) {
          maxFillPercent = 0.31; // 31% for 2 conductors
        } else if (numConductors === 3 || numConductors === 4) {
          maxFillPercent = 0.40; // 40% for 3 or 4 conductors
        } else if (numConductors > 4) {
          maxFillPercent = 0.40; // 40% for more than 4 conductors (non-lead-sheathed)
        }
      } else {
        // For lead-sheathed cables
        if (numConductors === 1) {
          maxFillPercent = 0.55; // 55% for 1 lead-sheathed conductor
        } else if (numConductors === 2) {
          maxFillPercent = 0.30; // 30% for 2 lead-sheathed conductors
        } else if (numConductors === 3) {
          maxFillPercent = 0.40; // 40% for 3 lead-sheathed conductors
        } else if (numConductors === 4) {
          maxFillPercent = 0.38; // 38% for 4 lead-sheathed conductors
        } else if (numConductors > 4) {
          maxFillPercent = 0.35; // 35% for more than 4 lead-sheathed conductors
        }
      }

      return maxFillPercent;
    },

    findWireTableForType(selectedWireType) {
      for (const [table, data] of this.tables.table6.wireData.entries()) {
        if (data.types.has(selectedWireType)) {
          return table;
        }
      }
      return null;
    },
    updateConductorOptions() {
      const wireTable = this.findWireTableForType(this.selectedWireType);
      const selectedWireData = this.tables.table6.wireData.get(wireTable);

      if (selectedWireData) {
        const hasStranded = !!selectedWireData.specs.strandedConductors;
        const hasSolid = !!selectedWireData.specs.solidConductors;

        // Show dropdown if both stranded and solid conductors are available
        this.showConductorSelection = hasStranded && hasSolid;
        // Set default to stranded conductors
        this.strandOrSolidWire = hasStranded ? 'strandedConductors' : 'solidConductors';
      }
    },
    updateWireSizes() {
      const wireTable = this.findWireTableForType(this.selectedWireType);
      const wireData = this.tables.table6.wireData.get(wireTable)?.specs[this.strandOrSolidWire];
      this.wireSizes = wireData ? Array.from(wireData.keys()) : [];
      this.wireSize = this.wireSizes.length > 0 ? this.wireSizes : '';
    },
    calculateFill() {
      this.totalWireArea = this.getTotalWireArea;
      this.conduitArea = this.getConduitArea;
      this.isFillValid = this.isTotalFillValid;
      this.result = true;
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
