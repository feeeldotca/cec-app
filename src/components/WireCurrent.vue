<template>
    <div>
      <h2>Wire Current Calculator</h2>
  
      <!-- 导线材质选择 -->
      <label for="material">Select Wire Material:</label>
      <select v-model="selectedMaterial">
        <option value="copper">Copper</option>
        <option value="aluminum">Aluminum</option>
      </select>
  
      <!-- 线号大小 -->
      <label for="wireSize">Select Wire Size:</label>
      <select v-model="selectedWireSize">
        <option v-for="size in wireSizes" :key="size" :value="size">{{ size }}</option>
      </select>
  
      <!-- 绝缘温度等级 -->
      <label for="insulation">Select Insulation Temperature Rating (°C):</label>
      <select v-model="selectedInsulation">
        <option v-for="(factor, key) in insulationOptions" :key="key" :value="key">{{ key }}°C</option>
      </select>
  
      <!-- 环境温度选择 -->
      <label for="ambientTemperature">Select Ambient Temperature (°C):</label>
      <select v-model="selectedAmbientTemperature">
        <option v-for="(factor, key) in ambientTemperatureOptions" :key="key" :value="key">{{ key }}°C</option>
      </select>
  
      <!-- 导线根数 -->
      <label for="numWires">Number of Wires:</label>
      <select v-model="selectedNumWires" @change="handleNumWiresChange">
        <option v-for="num in numWiresOptions" :key="num" :value="num">{{ num }}</option>
      </select>
  
      <!-- 单根绝缘导线且间隔小于25% -->
      <div v-if="selectedNumWires <= 4">
        <input type="checkbox" id="spacedLessThan25" v-model="isSpacedLessThan25">
        <label for="spacedLessThan25">Spaced less than 25% of the largest cable diameter</label>
      </div>
  
      <!-- 计算按钮 -->
      <button @click="calculateCurrent">Calculate Current</button>
  
      <!-- 计算结果展示 -->
      <div v-if="calculatedCurrent">
        <p>Calculated Safe Current: {{ calculatedCurrent }} A</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useLoadStore } from '../store'; // 假设store文件名为loadStore.js
  
  export default {
    setup() {
      const loadStore = useLoadStore();
  
      // 绑定用户选择的状态
      const selectedMaterial = ref('copper');
      const selectedWireSize = ref(null);
      const selectedInsulation = ref(null);
      const selectedAmbientTemperature = ref(null);
      const selectedNumWires = ref(1);
      const isSpacedLessThan25 = ref(false);
      const calculatedCurrent = ref(null);
  
      // 计算导线尺寸
      const wireSizes = computed(() => {
        return selectedMaterial.value === 'copper' ?
         loadStore.copperWireSizes : loadStore.aluminumWireSizes;
      });
  
      // 获取绝缘温度选项
      const insulationOptions = computed(() => loadStore.getInsulationOptions());
  
      // 获取环境温度选项
      const ambientTemperatureOptions = computed(() => loadStore.getAmbientTemperatureOptions());
  
      // 动态获取导线根数选项
      const numWiresOptions = computed(() => (isSpacedLessThan25.value ? [1, 2, 3, 4] : [1, 3, 6, 24, 30]));
  
      const handleNumWiresChange = () => {
        if (selectedNumWires.value > 4) {
          isSpacedLessThan25.value = false;
        }
      };
  
      // 调用 store 中的函数计算电流
      const calculateCurrent = () => {
      if (!selectedWireSize.value || !selectedInsulation.value || !selectedAmbientTemperature.value) {
        alert('Please select all options.');
        return;
      }
      calculatedCurrent.value = loadStore.calculateCurrent({
        wireSize: selectedWireSize.value,
        material: selectedMaterial.value,
        insulation: selectedInsulation.value,
        ambientTemp: selectedAmbientTemperature.value,
        numWires: selectedNumWires.value,
        isSpacedLessThan25: isSpacedLessThan25.value,
      });
    };
  
      return {
        selectedMaterial,
        selectedWireSize,
        selectedInsulation,
        selectedAmbientTemperature,
        selectedNumWires,
        isSpacedLessThan25,
        calculatedCurrent,
        wireSizes,
        insulationOptions,
        ambientTemperatureOptions,
        numWiresOptions,
        handleNumWiresChange,
        calculateCurrent,
      };
    },
  };
  </script>
  