<template>
  <div>
    <label for="cable-type">Select Cable Type:</label>
    <select v-model="selectedCableType" @change="updateTable">
      <option v-for="(table, cable) in table.cableType" :key="cable" :value="cable">
        {{ cable }}
      </option>
    </select>

    <label for="conductor-size">Select Conductor Size:</label>
    <select v-model="selectedConductorSize">
      <option v-for="size in conductorSizes" :key="size" :value="size">
        {{ size }}
      </option>
    </select>

    <label for="conductor-type">Select Conductor Type:</label>
    <select v-model="selectedConductorType">
      <option v-for="type in conductorTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <label for="cable-count">Enter Number of Cables:</label>
    <input type="number" v-model.number="cableCount" />

    <button @click="calculateTotalArea">Calculate Total Area</button>

    <div v-if="totalArea">
      <p>Total Area for {{ cableCount }} cables: {{ totalArea }} mm²</p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { tables } from '@/store/tables';

export default {
  setup() {
    const table6 = reactive(tables.table6);
   
    const selectedCableType = reactive({ value: '' });
    const selectedConductorSize = reactive({ value: '14' });
    const selectedConductorType = reactive({ value: 'strandedConductors' });
    const cableCount = reactive({ value: 1 });
    const totalArea = reactive({ value: 0 });

    const conductorSizes = computed(() => {
  if (!table6 || !table6.cableType) {
    return []; // Return an empty array if table6 or cableType is not defined
  }
  
  const table = table6.cableType[selectedCableType.value];
  return table ? Object.keys(table[selectedConductorType.value]) : [];
});


    const conductorTypes = ['strandedConductors', 'solidConductors'];

    const updateTable = () => {
      selectedConductorSize.value = '';
    };

    const calculateTotalArea = () => {
      const table = table6[table.cableType[selectedCableType.value]];
      if (!table) return;
      const conductor = table[selectedConductorType.value][selectedConductorSize.value];
      if (!conductor) return;
      const diameter = conductor.diameter;
      totalArea.value = (Math.PI * Math.pow(diameter / 2, 2) * cableCount.value).toFixed(2);
    };

    return {
      tables,
      selectedCableType,
      selectedConductorSize,
      selectedConductorType,
      cableCount,
      totalArea,
      conductorSizes,
      conductorTypes,
      updateTable,
      calculateTotalArea
    };
  }
};
</script>
