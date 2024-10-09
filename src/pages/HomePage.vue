<template>
  <div class="homepage">
    <h1>Welcome to the Electrical Calculators</h1>
    <div class="links">
      <router-link to="/load-calculator" class="btn btn-primary">Load Calculator</router-link>
      <router-link to="/voltage-drop" class="btn btn-secondary">Voltage Drop Calculator</router-link>
      <router-link to="/conduitfit" class="btn btn-primary">Conduit Fit </router-link>
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
