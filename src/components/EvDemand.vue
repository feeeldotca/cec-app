<template>
    <div>
      <h2>Electric Vehicle Load Calculator</h2>
  
      <!-- 用户选择是否启用EVEMS -->
      <div>
        <label for="evems">Use Electric Vehicle Energy Management System (EVEMS):</label>
        <input id="evems" type="checkbox" v-model="useEvems" />
      </div>
  
      <!-- 用户选择车位数量 -->
      <div v-if="!useEvems">
        <label for="spaces">Number of Parking Spaces:</label>
        <input id="spaces" type="number" v-model.number="numSpaces" min="1" />
      </div>
  
      <!-- 用户选择每个车位的负载 -->
      <div v-if="!useEvems">
        <label for="loadPerSpace">Load per Parking Space (W):</label>
        <select id="loadPerSpace" v-model.number="loadPerSpace">
          <option :value="2000">2000W</option>
          <option :value="4000">4000W</option>
          <option :value="6000">6000W</option>
          <option :value="8000">8000W</option>
        </select>
      </div>
  
      <!-- 计算按钮 -->
      <button @click="calculateTotalLoad">Calculate Total Load</button>
  
      <!-- 结果显示 -->
      <div v-if="totalLoad">
        <h3>Calculation Results:</h3>
        <p v-if="useEvems">EVEMS is enabled, the load from EVSE is not considered in total load.</p>
        <p v-else>Total Demand Factor: {{ demandFactor }}%</p>
        <p >Total Load: {{ totalLoad }} W</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numSpaces: 1, // 车位数量
        loadPerSpace: 2000, // 每个车位的负载
        useEvems: false, // 是否使用EVEMS
        totalLoad: null, // 总负载
        demandFactor: 100, // 需求系数
      };
    },
    methods: {
      // 根据表38计算需求系数
      getDemandFactor(numSpaces) {
        if (numSpaces <= 4) {
          return 100;
        } else if (numSpaces <= 8) {
          return this.loadPerSpace <= 6000 ? 90 : 90;
        } else if (numSpaces <= 12) {
          return this.loadPerSpace <= 4000 ? 90 : 80;
        } else if (numSpaces <= 16) {
          return this.loadPerSpace <= 4000 ? 90 : 80;
        } else if (numSpaces <= 24) {
          return this.loadPerSpace <= 6000 ? 80 : 70;
        } else {
          return this.loadPerSpace <= 6000 ? 70 : 70;
        }
      },
  
      // 计算总负载
      calculateTotalLoad() {
        if (this.useEvems) {
          this.totalLoad = null;
        } else {
          this.demandFactor = this.getDemandFactor(this.numSpaces);
          this.totalLoad = (this.numSpaces * this.loadPerSpace * this.demandFactor) / 100;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    margin-bottom: 10px;
  }
  </style>
  