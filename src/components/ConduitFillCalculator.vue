<template>
  <div>
    <h2>Conduit Fill Calculator</h2>
    <form @submit.prevent="calculateFill">

      <!-- Dropdown for selecting conduit type -->
      <div>
        <label for="conduitType">Conduit Type:</label>
        <select id="conduitType" v-model="loadStore.selectedConduitType">
          <option v-for="conduitType in conduitTypes" :key="conduitType" :value="conduitType">
            {{ conduitType }}
          </option>
        </select>
      </div>

      <!-- Input for selecting conduit size -->
      <div>
        <label for="conduitSize">Conduit Size:</label>
        <select id="conduitSize" v-model="loadStore.conduitSize">
          <option v-for="(size, index) in conduitSizes" :key="index" :value="size">{{ size }}</option>
        </select>
      </div>

      <!-- Dropdown for selecting wire type -->
      <div>
        <label for="selectedWireType">Please select Wire Type:</label>
        <select id="selectedWireType" v-model="loadStore.selectedWireType" @change="updateConductorOptions">
          <option v-for="wireType in combinedWireTypes" :key="wireType">{{ wireType }}</option>
        </select>
      </div>

      <!-- Conditionally display stranded or solid dropdown based on available options -->
      <div v-if="loadStore.showConductorSelection">
        <label for="strandOrSolidWire">Stranded or Solid Wire:</label>
        <select id="strandOrSolidWire" v-model="loadStore.strandOrSolidWire" @change="updateWireSizes">
          <option value="strandedConductors">Stranded Conductors</option>
          <option value="solidConductors">Solid Conductors</option>
        </select>
      </div>

      <!-- Input for selecting wire size -->
      <div>
        <label for="wireSize">Wire Size (AWG):</label>
        <select id="wireSize" v-model="loadStore.wireSize">
          <option v-for="(size, index) in wireSizes" :key="index" :value="size">{{ size }}</option>
        </select>
      </div>

      <!-- Input for number of conductors -->
      <div>
        <label for="numConductors">Number of Conductors:</label>
        <input id="numConductors" type="number" v-model.number="loadStore.numConductors" />
      </div>

      <button type="submit">Calculate Fill</button>
    </form>

    <!-- Display results if calculated -->
    <div v-if="loadStore.result">
      <h3>Results:</h3>
      <p>Maximum Fill Percentage: {{ loadStore.calculateMaxFillPercentage(loadStore.numConductors, loadStore.isLeadSheathed) * 100 }}%</p>
      <p>Total Wire Area: {{ loadStore.getTotalWireArea }} mm²</p>
      <p>Conduit Area: {{ loadStore.getConduitArea }} mm²</p>
      <p v-if="loadStore.isTotalFillValid">The conduit fill is within allowable limits.</p>
      <p v-else>The conduit fill exceeds allowable limits.</p>
    </div>

    <!-- 显示已添加的导线面积 -->
    <div v-if="loadStore.totalAreas.length > 0">
      <h3>Accumulated Wire Areas:</h3>
      <ul>
        <li v-for="(area, index) in loadStore.totalAreas" :key="index">
          {{ area }} mm²
        </li>
      </ul>
      <p>Total Wire Area: {{ loadStore.accumulatedWireArea }} mm²</p>
      <p>Conduit Area: {{ loadStore.getConduitArea }} mm²</p>
      <p>Total Wire Count: {{ loadStore.totalWireCount }}</p>
      <p v-if="!loadStore.isWireCountValid" style="color:red">Error: Total wire count exceeds 200!</p>
      <p v-if="loadStore.isTotalFillValid">The conduit fill is within allowable limits.</p>
      <p v-else>The conduit fill exceeds allowable limits.</p>
    </div>

    <!-- 清空导线面积 -->
    <button @click="clearAllAreas">Clear All Areas</button>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useLoadStore } from '../store';

export default {
  setup() {
    const loadStore = useLoadStore();

    // Combined wire types, calculated in setup
    const combinedWireTypes = computed(() => {
      const wireTypes = [];
      loadStore.tables.table6.wireData.forEach((value) => {
        wireTypes.push(...value.types);
      });
      return wireTypes;
    });

    // Automatically generate the list of conduit types from the database (table9)
    const conduitTypes = computed(() => Object.keys(loadStore.tables.table9));

    // Dynamically generate conduit sizes based on the selected conduit type
    const conduitSizes = computed(() => {
      return Object.keys(loadStore.tables.table9[loadStore.selectedConduitType] || {});
    });

    // Dynamically populate wire sizes based on selected conductor type (stranded or solid)
    const wireSizes = computed(() => {
      const wireTable = loadStore.findWireTableForType(loadStore.selectedWireType);
      if (!wireTable) {
        return []; // No wire table found for the selected wire type
      }
      const wireData = loadStore.tables.table6.wireData.get(wireTable)?.specs[loadStore.strandOrSolidWire];
      return wireData ? Array.from(wireData.keys()) : [];
    });

    // Watch for changes in selectedWireType to update wire sizes and options
    watch(() => loadStore.selectedWireType, () => {
      loadStore.updateConductorOptions();
      loadStore.updateWireSizes(); // Automatically update wire sizes when the wire type changes
    });

    // Function to calculate the fill
    const calculateFill = () => {
      loadStore.calculateFill();
    };

    // Function to clear all areas
    const clearAllAreas = () => {
      loadStore.clearAreas(); // 清空所有累加面积和导线根数
    };

    return {
      loadStore,
      combinedWireTypes,
      conduitTypes,
      conduitSizes,
      wireSizes,
      calculateFill,
      clearAllAreas
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
