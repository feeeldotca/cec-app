<template>
    <div>
      <load-calculator />
      <router-link to="/">Home</router-link>
    </div>
  </template>
  
  <script>
import LoadCalculator from '@/components/LoadCalculator.vue';

  export default {
    components: {
        LoadCalculator
    }
  };
  </script>
  
  <style scoped>
  /* Add any page-specific styles here */
  </style>
  