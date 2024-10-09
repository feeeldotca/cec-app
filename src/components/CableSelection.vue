<template>
  <div>
    <h1>Cable Area Calculator</h1>

    <!-- Cable Selection -->
    <div v-for="(table, cableKey) in cableType" :key="cableKey" class="cable-section">
      <h2>{{ cableKey }}</h2>
      <label for="quantity">Quantity:</label>
      <input
        v-model.number="selectedCables[cableKey].quantity"
        type="number"
        min="1"
        :placeholder="'Quantity for ' + cableKey"
      />
      <select v-model="selectedCables[cableKey].gauge">
        <option v-for="gauge in Object.keys(tables[table].strandedConductors)" :key="gauge" :value="gauge">
          Gauge {{ gauge }}
        </option>
      </select>
    </div>

    <!-- Button to calculate area -->
    <button @click="calculateTotalArea">Calculate Total Area</button>

    <!-- Display total area -->
    <div v-if="totalArea">
      <h3>Total Area: {{ totalArea.toFixed(2) }} mm²</h3>
    </div>
  </div>


  ****************************************
      <label for="wireType">Wire Type</label>
      <select v-model="selectedWireType">
        <option value="stranded">Stranded</option>
        <option value="solid">Solid</option>
      </select>
  
      <label for="wireSize">Wire Size (AWG)</label>
      <select v-model="selectedWireSize">
        <option disabled value="">Select Wire Size</option>
        <option
          v-for="(diameter, size) in wireSizes"
          :key="size"
          :value="size"
        >
          {{ size }} AWG
        </option>
      </select>
  
      <label for="wireCount">Wire Count</label>
      <input type="number" v-model="wireCount" />
  
      <button @click="calculateTotalArea">Calculate Area</button>
  
      <p v-if="totalArea">Total Area: {{ totalArea }} mm²</p>

  </template>
  <script>
  import { useLoadStore } from '../store';
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const cableStore = useLoadStore();
      const selectedCable = ref("");
      const selectedWireType = ref('stranded');
      const selectedWireSize = ref('');
      const wireCount = ref(1);
      const totalArea = ref(0);
      let types = ref();
      types = cableStore.tables.table6.cableType;
      console.log("selected: ", selectedCable);
      // Compute wire sizes based on selections
      const wireSizes = computed(() => {
        if (!selectedCable.value || !selectedWireType.value) {
          return {};
        }
  
        // Find the corresponding table
        const tableKey = Object.keys(cableStore.table6).find((key) => {
          const table = cableStore.table6[key];
          return table.cableType.some(
            (cable) =>
              cable.type === selectedCable.value.type &&
              cable.Voltage === selectedCable.value.Voltage
          );
        });
  
        if (!tableKey) {
          return {};
        }
  
        const conductorType =
          selectedWireType.value === 'stranded'
            ? 'strandedConductors'
            : 'solidConductors';
  
        return cableStore.table6[tableKey][conductorType] || {};
      });
  
      const calculateTotalArea = () => {
        if (selectedWireSize.value && wireCount.value) {
          const diameter =
            wireSizes.value[selectedWireSize.value]?.diameter;
          if (diameter) {
            const area = Math.PI * Math.pow(diameter / 2, 2);
            totalArea.value = (area * wireCount.value).toFixed(2);
          } else {
            alert('Diameter not found for the selected wire size.');
          }
        } else {
          alert('Please select wire size and enter wire count.');
        }
      };
  
      return {
        //cableTypes,
        selectedCable,
        selectedWireType,
        wireSizes,
        selectedWireSize,
        wireCount,
        totalArea,
        types,
        calculateTotalArea,
      };
    },
  };
  </script>
  