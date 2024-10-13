<template>
  <div>
      <h2>Conduit Fill Calculator</h2>
      <form @submit.prevent="calculateConduitFill">

          <div>
              <label for="selectedWireType">Please select Wire Type:</label>
              <select v-model="selectedWireType">
                  <option v-for="wireType in combinedWireTypes" :key="wireType">{{ wireType }}</option>
              </select>
          </div>

          <div>
              <label for="conduitSize">Conduit Size:</label>
              <select v-model="conduitSize">
                  <option v-for="(size, index) in conduitSizes" :key="index" :value="size">{{ size }}</option>
              </select>
          </div>

          <div>
              <label for="wireSize">Wire Size (AWG):</label>
              <select v-model="wireSize">
                  <option v-for="(size, index) in wireSizes" :key="index" :value="size">{{ size }}</option>
              </select>
          </div>

          <div>
              <label for="numConductors">Number of Conductors:</label>
              <input type="number" v-model.number="numConductors" />
          </div>

          <button type="submit">Calculate Fill</button>
      </form>

      <div v-if="result">
          <h3>Results:</h3>
          <p>Total Wire Area: {{ totalWireArea }} mm²</p>
          <p>Conduit Area: {{ conduitArea }} mm²</p>
          <p v-if="isFillValid">The conduit fill is within allowable limits.</p>
          <p v-else>The conduit fill exceeds allowable limits. Use a larger conduit.</p>
      </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useLoadStore } from '../store/index1';

export default {
  setup() {
      const wireStore = useLoadStore();
      const conduitSize = ref('21');
      const wireSize = ref('14');
      const numConductors = ref(1);
      const result = ref(false);
      const isFillValid = ref(false);
      const totalWireArea = ref(0);
      const conduitArea = ref(0);
      const selectedWireType = ref("R90XLPE_UNJACKETED_600V");

      // Combined wire types from table6
      const combinedWireTypes = Object.values(wireStore.tables.table6.wireTypes).reduce((acc, value) => {
          if (Array.isArray(value)) {
              return acc.concat(value);
          } else {
              acc.push(value);
              return acc;
          }
      }, []);

      // Wire sizes will change based on selected wire type
      const wireSizes = ref([]);
      const updateWireSizes = () => {
          const wireTypeTable = wireStore.findWireTypeTable(selectedWireType.value);
          if (wireTypeTable) {
              wireSizes.value = Object.keys(wireStore.tables.table6.wireSpecs[wireTypeTable].strandedConductors);
          }
      };
      updateWireSizes();

      // Conduit sizes are static, fetched from table9
      const conduitSizes = Object.keys(wireStore.tables.table9.rigidMetalConduit);

      // Method to calculate conduit fill
      const calculateConduitFill = () => {
          const wireTypeTable = wireStore.findWireTypeTable(selectedWireType.value);
          if (!wireTypeTable) {
              console.error('Wire type table not found');
              return;
          }

          const wireData = wireStore.tables.table6.wireSpecs[wireTypeTable].strandedConductors[wireSize.value];
          if (!wireData) {
              console.error('Wire data not found');
              return;
          }

          // Calculate wire area
          const wireArea = (wireData.diameter ** 2 * Math.PI) / 4;
          totalWireArea.value = wireArea * numConductors.value;

          // Look up the conduit area from table9
          const conduitData = wireStore.tables.table9.rigidMetalConduit[conduitSize.value];
          if (!conduitData) {
              console.error('Conduit data not found');
              return;
          }

          // Calculate conduit area
          conduitArea.value = (conduitData.diameter ** 2 * Math.PI) / 4;

          // Check if the total wire area exceeds the allowed percentage of the conduit
          const maxFillPercentage = 0.4;
          isFillValid.value = totalWireArea.value <= conduitArea.value * maxFillPercentage;

          result.value = true;
      };

      // Watchers to recalculate when the user changes wire type, size, or conduit size
      watch([selectedWireType, wireSize, conduitSize, numConductors], () => {
          calculateConduitFill();
      });

      // Also watch for changes in wire type to update available wire sizes
      watch(selectedWireType, () => {
          updateWireSizes();
      });

      return {
          conduitSize,
          wireSize,
          combinedWireTypes,
          selectedWireType,
          numConductors,
          result,
          isFillValid,
          totalWireArea,
          conduitArea,
          wireSizes,
          conduitSizes,
          calculateConduitFill,
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
