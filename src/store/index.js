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
    conductorMaterial: 'copper',
    temperature: '75c',

    // === ConduitFillCalculator.vue Specific State ===
    isFillValid: false,
    maxWireCount: 200,
    selectedWireType: '',//R90XLPE_UNJACKETED_600V',
    wireSize: '14',
    conduitSize: '21',
    numConductors: 1,
    totalAreas: [],
    totalWireCount: 0,
    strandOrSolidWire: '',//strandedConductors',
    selectedConduitType: '',//rigidMetalConduit',
    showConductorSelection: false,
    result: false,
    wireSizes: [],
    wireHistory: [],
    isLeadSheathed: false, // Default to insulated conductors
    maxFillPercentage: 0,
    // === Common/Shared State ===
    tables: tables,
    wireCount: 1,
  }),

  getters: {
    // Compute wire area based on wire specs
    getWireArea(state) {
      const wireTypeTable = state.findWireTableForType(state.selectedWireType);
      if (!wireTypeTable || !state.tables.table6.wireData.has(wireTypeTable)) return 0;

      const wireSpecs = state.tables.table6.wireData.get(wireTypeTable).specs[state.strandOrSolidWire].get(state.wireSize);
      if (!wireSpecs) return 0;

      return state.calculateArea(wireSpecs.diameter, state.numConductors);
    },

    // Compute conduit area
    getConduitArea(state) {
      const conduitData = state.tables.table9[state.selectedConduitType][state.conduitSize];
      if (conduitData) return state.calculateArea(conduitData.diameter);
      return 0;
    },

    // Calculate accumulated wire area
    accumulatedWireArea(state) {
      return state.totalAreas.reduce((sum, area) => sum + area, 0);
    },

    // Check if total fill is valid
    isTotalFillValid(state) {
      state.maxFillPercentage = state.calculateMaxFillPercentage(state.totalWireCount, state.isLeadSheathed);
      return state.accumulatedWireArea <= state.getConduitArea * state.maxFillPercentage;
    },

    // Check if wire count is valid
    isWireCountValid(state) {
      return state.totalWireCount <= state.maxWireCount;
    },

    // Combine wire types from table6
    combinedWireTypes(state) {
      const wireTypes = [];
      state.tables.table6.wireData.forEach((value) => {
        wireTypes.push(...value.types);
      });
      return wireTypes;
    },

    // Automatically generate conduit types
    conduitTypes(state) {
      return Object.keys(state.tables.table9);
    },
    // Dynamically generate conduit sizes
    conduitSizes(state) {
      return Object.keys(state.tables.table9[state.selectedConduitType] || {});
    },
    //WireCurrent.vue specific getters
    // 动态获取导线尺寸
    copperWireSizes(state) {
      return state.tables.table1.wireSize;
    },
    aluminumWireSizes(state) {
      return state.tables.table3.wireSize;
    },
    // 获取绝缘温度选项 (从 `table5a`)
    getInsulationOptions() {
      return this.tables.table5a[0].correctionFactors;
    },
    // 获取环境温度选项 (从 `table5a`)
    getAmbientTemperatureOptions() {
      return this.tables.table5a.map(entry => entry.ambientTemperature);
    },
  },

  actions: {
    // Shared Action to update state key-value
    updateState(key, value) {
      this[key] = value;
    },
    //WireCurrent.vue specific getters
    calculateCurrent({ wireSize, material, insulation, ambientTemp, numWires, isSpacedLessThan25 }) {
      let current = 0;

      // 获取基础的导线电流 (从 table1 或 table3)
      if (material === 'copper') {
        current = this.getBaseCurrent(this.tables.table1, wireSize, insulation);
      } else {
        current = this.getBaseCurrent(this.tables.table3, wireSize, insulation);
      }

      // 应用环境温度修正 (从 table5a)
      const correctionFactor = this.getTemperatureCorrectionFactor(insulation, ambientTemp);
      current *= correctionFactor;

      // 导线根数修正 (从 table5b 和 table5c)
      if (isSpacedLessThan25 && numWires <= 4) {
        current *= this.tables.table5b[numWires - 1]; // 使用5B表修正
      } else {
        current *= this.tables.table5c[this.getWireGroupRange(numWires)]; // 使用5C表修正
      }

      return current.toFixed(2); // 返回计算后的电流值
    },
    getBaseCurrent(table, wireSize, insulation) {
      const index = table.wireSize.indexOf(wireSize);
      const insulationData = table.degree.find(d => d.temp === insulation);
      return insulationData.amps[index];
    },
    getTemperatureCorrectionFactor(insulation, ambientTemp) {
      const entry = this.tables.table5a.find(e => e.ambientTemperature === ambientTemp);
      return entry ? entry.correctionFactors[insulation] : 1;
    },
    getWireGroupRange(numWires) {
      if (numWires <= 3) return 0;  // 1-3根导线
      if (numWires <= 6) return 1;  // 4-6根导线
      if (numWires <= 24) return 2; // 7-24根导线
      return 3;                     // 25根以上
    },

    // Calculate area of the wire or conduit
    calculateArea(diameter, count = 1) {
      const radius = diameter / 2;
      const area = Math.PI * Math.pow(radius, 2);
      return (area * count).toFixed(2);
    },

    // Find the wire table for the selected wire type
    findWireTableForType(wireType) {
      for (const [table, data] of this.tables.table6.wireData.entries()) {
        if (data.types.has(wireType)) {
          return table;
        }
      }
      return null;
    },

    // Clear areas, wire count, and history
    clearAreas() {
      this.totalAreas = [];
      this.totalWireCount = 0;
      this.wireHistory = [];

    },

    // Calculate fill percentage based on conductor count and lead sheathing
    calculateMaxFillPercentage(numConductors, isLeadSheathed = false) {
      if (!isLeadSheathed) {
        if (numConductors === 1) return 0.53;
        if (numConductors === 2) return 0.31;
        if (numConductors >= 3) return 0.40;
      } else {
        if (numConductors === 1) return 0.55;
        if (numConductors === 2) return 0.30;
        if (numConductors === 3) return 0.40;
        if (numConductors === 4) return 0.38;
        if (numConductors > 4) return 0.35;
      }
      return 0.40;
    },

    // Update available conductor options
    updateConductorOptions() {
      const wireTable = this.findWireTableForType(this.selectedWireType);
      const selectedWireData = this.tables.table6.wireData.get(wireTable);

      if (selectedWireData) {
        const hasStranded = !!selectedWireData.specs.strandedConductors;
        const hasSolid = !!selectedWireData.specs.solidConductors;
        this.showConductorSelection = hasStranded && hasSolid;
        this.strandOrSolidWire = hasStranded ? 'strandedConductors' : (hasSolid ? 'solidConductors' : 'Conductors');
      }
    },

    // Dynamically update wire sizes based on the selected conductor type
    updateWireSizes() {
      const wireTable = this.findWireTableForType(this.selectedWireType);
      if (!wireTable) {
        this.wireSizes = [];
        return;
      }
      const wireData = this.tables.table6.wireData.get(wireTable)?.specs[this.strandOrSolidWire];
      this.wireSizes = wireData ? Array.from(wireData.keys()) : [];
      this.wireSize = this.wireSizes.length > 0 ? this.wireSizes[0] : '';
    },

    // Calculate conduit fill
    calculateFill() {
      let wireInfo = {
        name: this.selectedWireType,
        size: this.wireSize,
        type: this.strandOrSolidWire,
        num: this.numConductors,
        area: parseFloat(this.getWireArea),
      };

      if (this.wireHistory.length === 0 ||
        !this.isEqual(this.wireHistory[this.wireHistory.length - 1], wireInfo)) {
        this.totalAreas.push(parseFloat(this.getWireArea));
        this.totalWireCount += this.numConductors;
        this.wireHistory.push({ ...wireInfo });
      }
      // Check if the total fill is within valid limits, passing `isLeadSheathed`
      //   this.maxFillPercentage = this.calculateMaxFillPercentage(this.totalWireCount, this.isLeadSheathed);
      // Check if total fill is valid
      this.isFillValid = this.isTotalFillValid;
      this.result = true; // Set result to true so the UI can display the results
    },

    // Compare two objects for equality
    isEqual(obj1, obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false; // Return false if the number of keys is different
      }
      // Compare each key-value pair
      for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
          return false; // Return false if any value is different
        }
      }
      return true; // Return true if all keys and values are equal
    },

    // Format wire types for display
    formattedWireTypes(wireType) {
      // return state.combinedWireTypes.map(wireType =>
      //   wireType.replace(/([a-z])([A-Z])/g, '$1 $2')
      //     .split(' ')
      //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      //     .join(' ')
      // );
      return wireType
        .split('_') // 分割下划线
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // 每个单词首字母大写
        .join(' '); // 重新用空格连接
    },
    // Format conduit types for display
    formattedConduitTypes(conduitType) {
      // return state.conduitTypes.map(conduit =>
      //   conduit.replace(/([a-z])([A-Z])/g, '$1 $2')
      //     .split(' ')
      //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      //     .join(' ')
      // );
      return conduitType
        .replace(/([a-z])([A-Z])/g, '$1 $2') // 在小写字母和大写字母之间插入空格
        .split(' ') // 用空格分割
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 首字母大写
        .join(' '); // 重新用空格连接
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
