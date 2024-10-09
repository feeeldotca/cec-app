<template>
    <div>
      <CableSelection />
      <ConduitCalculator />
    </div>
  </template>
  
  <script>
  import CableSelection from '../components/CableSelection.vue';
  import ConduitCalculator from '../components/ConduitCalculator.vue';
  
  export default {
    components: {
      CableSelection,
      ConduitCalculator
    }
  };
  </script>
  