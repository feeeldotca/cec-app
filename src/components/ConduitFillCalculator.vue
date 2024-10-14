<template>
  <div>
      <h2>Conduit Fill Calculator</h2>
      <form @submit.prevent="calculateConduitFill">
          <div>
              <label for="selectedWireType">Please select Wire Type:</label>
              <select v-model="loadStore.selectedWireType">
                  <option v-for="wireType in combinedWireTypes" :key="wireType">{{ wireType }}</option>
              </select>
          </div>

          <div>
              <label for="conduitSize">Conduit Size:</label>
              <select v-model="loadStore.conduitSize">
                  <option v-for="(size, index) in conduitSizes" :key="index" :value="size">{{ size }}</option>
              </select>
          </div>

          <div>
              <label for="wireSize">Wire Size (AWG):</label>
              <select v-model="loadStore.wireSize">
                  <option v-for="(size, index) in wireSizes" :key="index" :value="size">{{ size }}</option>
              </select>
          </div>

          <div>
              <label for="numConductors">Number of Conductors:</label>
              <input type="number" v-model.number="loadStore.numConductors" />
          </div>

          <button type="submit">Calculate Fill</button>
      </form>

      <div v-if="loadStore.isFillValid !== null">
          <h3>Results:</h3>
          <p>Total Wire Area: {{ loadStore.totalWireArea }} mm²</p>
          <p>Conduit Area: {{ loadStore.conduitArea }} mm²</p>
          <p v-if="loadStore.isFillValid">The conduit fill is within allowable limits.</p>
          <p v-else>The conduit fill exceeds allowable limits. Use a larger conduit.</p>
      </div>
  </div>
</template>

<script>
import { useLoadStore } from '../store';

export default {
  setup() {
      const loadStore = useLoadStore();

      // Combined wire types, calculated in setup
      const combinedWireTypes = Object.values(loadStore.tables.table6.wireTypes).reduce((acc, value) => {
          if (Array.isArray(value)) return acc.concat(value);
          acc.push(value);
          return acc;
      }, []);

      // Available wire sizes and conduit sizes
      const wireSizes = Object.keys(loadStore.tables.table6.wireSpecs[loadStore.selectedWireType]?.strandedConductors || {});
      const conduitSizes = Object.keys(loadStore.tables.table9.rigidMetalConduit);

      return {
          loadStore, // Direct access to store state and actions
          combinedWireTypes,
          wireSizes,
          conduitSizes
      };
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
