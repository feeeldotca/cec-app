<template>
    <div>
      <h2 class="mb-4">Load Calculation for Single Dwelling Unit</h2>
      <form @submit.prevent="calculateLoad" class="mb-4">
        <div class="form-group row">
          <label for="unit" class="col-sm-4 col-form-label">Select Unit:</label>
          <div class="col-sm-6">
            <select v-model="unit" id="unit" class="form-control">
              <option value="m2">m²</option>
              <option value="sqft">ft²</option>
            </select>
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Select the unit for area measurement." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="aboveGroundFloorArea" class="col-sm-4 col-form-label">Total Living Area Above Ground ({{ unit }}):</label>
          <div class="col-sm-6">
            <input type="number" v-model="aboveGroundFloorArea" id="aboveGroundFloorArea" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the total living area above ground." />
          </div>
        </div>
  
        <div class="form-group row align-items-center">
          <label for="hasBasement" class="col-sm-4 col-form-label">Has Basement:
            <input type="checkbox" v-model="hasBasement" id="hasBasement" class="form-check-input ml-2" />
          </label>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Check if the house has a basement." />
          </div>
        </div>
  
        <div v-if="hasBasement" class="form-group row">
          <label for="belowGroundFloorArea" class="col-sm-4 col-form-label">Below Ground Floor Area ({{ unit }}):</label>
          <div class="col-sm-6">
            <input type="number" v-model="belowGroundFloorArea" id="belowGroundFloorArea" class="form-control input-width" />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the below ground floor area." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="heatingLoad" class="col-sm-4 col-form-label">Electric Space-Heating Load (kW):</label>
          <div class="col-sm-6">
            <input type="number" v-model="heatingLoad" id="heatingLoad" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the electric space-heating load." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="acLoad" class="col-sm-4 col-form-label">Air-Conditioning Load (kW):</label>
          <div class="col-sm-6">
            <input type="number" v-model="acLoad" id="acLoad" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the air-conditioning load." />
          </div>
        </div>
  
        <div class="form-group row align-items-center">
          <label for="hasInterlock" class="col-sm-4 col-form-label">Interlock Between Heating and AC:
            <input type="checkbox" v-model="hasInterlock" id="hasInterlock" class="form-check-input ml-2" />
          </label>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Check if there is an interlock between heating and AC." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="rangeLoad" class="col-sm-4 col-form-label">Electric Range Load (kW):</label>
          <div class="col-sm-6">
            <input type="number" v-model="rangeLoad" id="rangeLoad" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the electric range load." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="waterHeaterLoad" class="col-sm-4 col-form-label">Water Heater Load (kW):</label>
          <div class="col-sm-6">
            <input type="number" v-model="waterHeaterLoad" id="waterHeaterLoad" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the water heater load." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="evLoad" class="col-sm-4 col-form-label">Electric Vehicle Load (kW):</label>
          <div class="col-sm-6">
            <input type="number" v-model="evLoad" id="evLoad" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter the electric vehicle load." />
          </div>
        </div>
  
        <div class="form-group row">
          <label for="additionalLoads" class="col-sm-4 col-form-label">Additional Loads (W):</label>
          <div class="col-sm-6">
            <input type="number" v-model="additionalLoads" id="additionalLoads" class="form-control input-width" required />
          </div>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Enter any additional loads." />
          </div>
        </div>
  
        <div class="form-group row align-items-center">
          <label for="hasRange" class="col-sm-4 col-form-label">Has Electric Range:
            <input type="checkbox" v-model="hasRange" id="hasRange" class="form-check-input ml-2" />
          </label>
          <div class="col-sm-2">
            <img src="/info-icon.svg" class="info-icon" data-toggle="tooltip" data-placement="top" title="Check if there is an electric range." />
          </div>
        </div>
  
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Calculate</button>
        </div>
      </form>
  
      <div v-if="finalLoad">
        <h4>Total Load of Living Area: {{ totalLoad }} W</h4>
        <h4>Larger Load (Heating or AC): {{ largerLoad }} W</h4>
        <h4>Final Calculated Load: {{ finalLoad }} W</h4>
        <h4>Required Feeder Size: {{ feederSize }}</h4>
      </div>
    </div>
  </template>
  
  <style scoped>
  .input-width {
    max-width: 150px;
  }
  .text-center {
    text-align: center;
  }
  /* nth-child Pseudo-Class: The nth-child pseudo-class is used to select elements based on their position in a parent element.
  nth-child(odd): Applies styles to odd-numbered elements.
  nth-child(even): Applies styles to even-numbered elements.
  Background Colors: The background color is set to white for odd rows and light gray for even rows. */
  .form-group:nth-child(odd) {
    background-color: white;
  }
  .form-group:nth-child(even) {
    background-color: lightgray;
  }
  </style>
  
  <script>
  import { ref, watch, onMounted } from 'vue';
  import { useLoadStore } from '../store';
  
  export default {
    setup() {
      const loadStore = useLoadStore();
  
      // State Variables: Defined reactive state variables using ref.
  
      const unit = ref('m2');
      const aboveGroundFloorArea = ref(0);
      const belowGroundFloorArea = ref(0);
      const hasBasement = ref(false);
      const heatingLoad = ref(0);
      const acLoad = ref(0);
      const hasInterlock = ref(false);
      const rangeLoad = ref(0);
      const waterHeaterLoad = ref(0);
      const evLoad = ref(0);
      const additionalLoads = ref(0);
      const hasRange = ref(true);
      const totalLoad = ref(0);
      const largerLoad = ref(0);
      const finalLoad = ref(0);
      const feederSize = ref('');
  // Watchers: Watching changes in rangeLoad to automatically check the hasRange checkbox.
      watch(rangeLoad, (newValue) => {
        if (newValue > 0) {
          hasRange.value = true;
        } else {
          hasRange.value = false;
        }
      });
  // Conversion Function: Function to convert square feet to square meters.
      const convertToSquareMeters = (value) => {
        return value * 0.092903;
      };
  // Calculation Function: Function to calculate the load based on the inputs.
      const calculateLoad = () => {
        let aboveGroundArea = aboveGroundFloorArea.value;
        let belowGroundArea = belowGroundFloorArea.value;
  
        if (unit.value === 'sqft') {
          aboveGroundArea = convertToSquareMeters(aboveGroundArea);
          belowGroundArea = convertToSquareMeters(belowGroundArea);
        }
  
        loadStore.aboveGroundFloorArea = aboveGroundArea;
        loadStore.belowGroundFloorArea = belowGroundArea;
        loadStore.calculateTotalLoad();
        totalLoad.value = loadStore.totalLoad;
  
        loadStore.calculateHeatingLoad(heatingLoad.value);
        loadStore.calculateACLoad(acLoad.value);
  
        if (hasInterlock.value) {
          loadStore.determineLargerLoad();
          largerLoad.value = loadStore.largerLoad;
        } else {
          largerLoad.value = loadStore.heatingLoad + loadStore.acLoad;
        }
  
        loadStore.calculateRangeLoad(rangeLoad.value);
        loadStore.calculateWaterHeaterLoad(waterHeaterLoad.value);
        loadStore.calculateEVLoad(evLoad.value);
        loadStore.calculateAdditionalLoads(additionalLoads.value, hasRange.value);
  
        loadStore.calculateFinalLoad();
        finalLoad.value = loadStore.finalLoad;
  
        loadStore.determineServiceFeederLoad();
        finalLoad.value = loadStore.finalLoad;
        console.log("FinalLoad.Value: ", finalLoad.value)
        // Determine the required feeder size
        loadStore.determineFeederSize(finalLoad.value);
        feederSize.value = loadStore.feederSize;
      };
  
  // Tooltip Initialization: Using onMounted to initialize Bootstrap tooltips
      onMounted(async () => {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });
  
      return {
        unit,
        aboveGroundFloorArea,
        belowGroundFloorArea,
        hasBasement,
        heatingLoad,
        acLoad,
        hasInterlock,
        rangeLoad,
        waterHeaterLoad,
        evLoad,
        additionalLoads,
        hasRange,
        totalLoad,
        largerLoad,
        finalLoad,
        feederSize,
        calculateLoad
      };
    }
  };
  </script>
  