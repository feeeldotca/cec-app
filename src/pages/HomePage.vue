<template>
  <div class="homepage">
    <h1>Welcome to the Electrical Calculators</h1>
    <div class="links">
      <router-link to="/load-calculator" class="btn btn-primary">Load Calculator</router-link>
      <router-link to="/voltage-drop" class="btn btn-secondary">Voltage Drop Calculator</router-link>
      <router-link to="/conduitfill" class="btn btn-primary">Conduit Fill </router-link>
      <router-link to="/evdemand" class="btn btn-primary">EV Demand </router-link>
      <router-link to="/wirecurrent" class="btn btn-primary">Wire Current </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.homepage {
  text-align: center;
  margin-top: 50px;
}

.links {
  margin-top: 20px;
}

.btn {
  margin: 10px;
}
</style>
