<template>
  <div>
    <h2 class="mb-4">Load Calculation for Single Dwelling Unit</h2>
    <form @submit.prevent="calculateLoad" class="mb-4">
      <!-- Unit Selection -->
      <div class="form-group row">
        <label for="unit" class="col-sm-4 col-form-label">Select Unit:</label>
        <div class="col-sm-6">
          <select v-model="unit" id="unit" class="form-control">
            <option value="m2">m²</option>
            <option value="sqft">ft²</option>
          </select>
        </div>
      </div>

      <!-- Above Ground Floor Area -->
      <div class="form-group row">
        <label for="aboveGroundFloorArea" class="col-sm-4 col-form-label">Total Living Area Above Ground ({{ unit }}):</label>
        <div class="col-sm-6">
          <input type="number" v-model="loadStore.aboveGroundFloorArea" id="aboveGroundFloorArea" class="form-control input-width" required />
        </div>
      </div>

      <!-- Basement Selection and Floor Area -->
      <div class="form-group row align-items-center">
        <label for="hasBasement" class="col-sm-4 col-form-label">Has Basement:
          <input type="checkbox" v-model="loadStore.hasBasement" id="hasBasement" class="form-check-input ml-2" />
        </label>
      </div>
      <div v-if="loadStore.hasBasement" class="form-group row">
        <label for="belowGroundFloorArea" class="col-sm-4 col-form-label">Below Ground Floor Area ({{ unit }}):</label>
        <div class="col-sm-6">
          <input type="number" v-model="loadStore.belowGroundFloorArea" id="belowGroundFloorArea" class="form-control input-width" />
        </div>
      </div>

      <!-- Heating Load -->
      <div class="form-group row">
        <label for="heatingLoad" class="col-sm-4 col-form-label">Electric Space-Heating Load (kW):</label>
        <div class="col-sm-6">
          <input type="number" v-model="loadStore.heatingLoad" id="heatingLoad" class="form-control input-width" required />
        </div>
      </div>

      <!-- Air-Conditioning Load -->
      <div class="form-group row">
        <label for="acLoad" class="col-sm-4 col-form-label">Air-Conditioning Load (kW):</label>
        <div class="col-sm-6">
          <input type="number" v-model="loadStore.acLoad" id="acLoad" class="form-control input-width" required />
        </div>
      </div>

      <!-- Other Load Inputs... -->

      <div class="text-center">
        <button type="submit" class="btn btn-primary">Calculate</button>
      </div>
    </form>

    <!-- Displaying Results -->
    <div v-if="loadStore.finalLoad">
      <h4>Total Load of Living Area: {{ loadStore.totalLoad }} W</h4>
      <h4>Larger Load (Heating or AC): {{ loadStore.largerLoad }} W</h4>
      <h4>Final Calculated Load: {{ loadStore.finalLoad }} W</h4>
      <h4>Required Feeder Size: {{ loadStore.feederSize }}</h4>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useLoadStore } from '../store/index1';

export default {
  setup() {
    const loadStore = useLoadStore();
    const unit = ref('m2');

    const calculateLoad = () => {
      loadStore.calculateTotalLoad();
      loadStore.calculateHeatingLoad(loadStore.heatingLoad);
      loadStore.calculateACLoad(loadStore.acLoad);
      loadStore.determineLargerLoad();
      loadStore.calculateRangeLoad(loadStore.rangeLoad);
      loadStore.calculateWaterHeaterLoad(loadStore.waterHeaterLoad);
      loadStore.calculateEVLoad(loadStore.evLoad);
      loadStore.calculateAdditionalLoads(loadStore.additionalLoads, loadStore.hasRange);
      loadStore.calculateFinalLoad();
      loadStore.determineServiceFeederLoad();
      loadStore.determineFeederSize(loadStore.finalLoad);
    };

    // Initialize Bootstrap tooltips when the component is mounted
    onMounted(async () => {
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
      tooltipTriggerList.map((tooltipTriggerEl) => {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    });

    return {
      unit,
      loadStore, // Expose the store to use its reactive state
      calculateLoad,
    };
  }
};
</script>

<style scoped>
.input-width {
  max-width: 150px;
}
.text-center {
  text-align: center;
}
.form-group:nth-child(odd) {
  background-color: white;
}
.form-group:nth-child(even) {
  background-color: lightgray;
}
</style>
