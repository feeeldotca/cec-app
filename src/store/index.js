import { createPinia, defineStore } from 'pinia';

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
    voltageDrop: 0,
    tables: {
      table2: {
        copper: [
          { wireSize: "14", ampacity: "15" },
          { wireSize: "12", ampacity: "20" },
          { wireSize: "10", ampacity: "30" }
          // Add more entries as needed
        ],
        aluminum: [
          { wireSize: "14", ampacity: "10" },
          { wireSize: "12", ampacity: "15" },
          { wireSize: "10", ampacity: "25" }
          // Add more entries as needed
        ]
      },
      table4: {
        copper: [
          { wireSize: "14", ampacity: "20" },
          { wireSize: "12", ampacity: "25" },
          { wireSize: "10", ampacity: "35" }
          // Add more entries as needed
        ],
        aluminum: [
          { wireSize: "14", ampacity: "15" },
          { wireSize: "12", ampacity: "20" },
          { wireSize: "10", ampacity: "30" }
          // Add more entries as needed
        ]
      },
      tableD3: [
        { distance: "50", voltageDrop: "2.5" },
        { distance: "100", voltageDrop: "5.0" },
        { distance: "150", voltageDrop: "7.5" }
        // Add more entries as needed
      ]
    }
  }),
  actions: {
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
    determineServiceFeederLoad() {
      if (this.aboveGroundFloorArea < 80 && this.finalLoad < 14400) {
        this.finalLoad = 14400;
      } else if (this.aboveGroundFloorArea >= 80 && this.finalLoad < 24000) {
        this.finalLoad = 24000;
      }
    },
    calculateVoltageDrop(current, length, resistivity, area) {
      this.voltageDrop = (2 * current * length * resistivity) / area;
    }
  }
});

const pinia = createPinia();
export default pinia;
