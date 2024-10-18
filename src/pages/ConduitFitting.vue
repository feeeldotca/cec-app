<template>
    <div>
      <CableSelection />
      <ConduitCalculator />
    </div>
  </template>
  
  <script>
  import CableSelection from '../assets/CableSelection.ve';
  import ConduitCalculator from '../components/ConduitCalculator.vue';
  
  export default {
    components: {
      CableSelection,
      ConduitCalculator
    }
  };
  </script>
  