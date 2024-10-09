<template>
    <div>
      <label for="conduitSize">Conduit Size (mm²)</label>
      <input v-model="conduitSize" type="number" />
  
      <button @click="calculateMaxWires">Calculate Max Wires</button>
  
      <p v-if="maxWires">Maximum Wires: {{ maxWires }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        conduitSize: null,
        totalArea: null,  // You can pass this from CableSelection.vue if necessary
        wireArea: 10,     // Hardcoded value for now; can be dynamic based on wire size selection
        maxWires: null
      };
    },
    methods: {
      calculateMaxWires() {
        if (this.conduitSize && this.wireArea) {
          this.maxWires = Math.floor(this.conduitSize / this.wireArea);
        }
      }
    }
  };
  </script>
  