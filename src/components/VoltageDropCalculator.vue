<template>
  <div>
    <h2 class="mb-4">Voltage Drop and Maximum Run Distance Calculator</h2>
    <form @submit.prevent="calculateResults" class="mb-4">
      <div class="form-group row">
        <label for="wireSize" class="col-sm-4 col-form-label">Wire Size (AWG):</label>
        <div class="col-sm-6">
          <input type="text" v-model="wireSize" id="wireSize" class="form-control" required />
        </div>
      </div>

      <div class="form-group row">
        <label for="voltage" class="col-sm-4 col-form-label">Running Voltage (V):</label>
        <div class="col-sm-6">
          <input type="number" v-model="voltage" id="voltage" class="form-control" required />
        </div>
      </div>

      <div class="form-group row">
        <label for="voltageDrop" class="col-sm-4 col-form-label">Voltage Drop Percentage Allowed (%):</label>
        <div class="col-sm-6">
          <input type="number" v-model="voltageDrop" id="voltageDrop" class="form-control" required />
        </div>
      </div>

      <div class="form-group row">
        <label for="insulationTemp" class="col-sm-4 col-form-label">Wire Insulation Temperature Rating (°C):</label>
        <div class="col-sm-6">
          <select v-model="insulationTemp" id="insulationTemp" class="form-control">
            <option value="60c">60°C</option>
            <option value="75c">75°C</option>
            <option value="85–90c">85–90°C</option>
            <option value="110c">110°C</option>
            <option value="125c">125°C</option>
            <option value="200c">200°C</option>
          </select>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary">Calculate</button>
      </div>
    </form>

    <div v-if="results">
      <h4>Step-by-Step Results:</h4>
      <p><strong>Current:</strong> {{ results.current }} A</p>
      <p><strong>Base Distance:</strong> {{ results.baseDistance }} m</p>
      <p><strong>Correction Factor:</strong> {{ results.correctionFactor }}</p>
      <p><strong>Maximum Run Distance:</strong> {{ results.maxRunDistance }} m</p>
      <p><strong>Voltage Drop:</strong> {{ results.voltageDrop }} %</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useLoadStore } from '../store/index1';

export default {
  setup() {
    const loadStore = useLoadStore();

    const wireSize = ref('');
    const voltage = ref(240); // Default voltage
    const voltageDrop = ref(3); // Default voltage drop percentage
    const insulationTemp = ref('75c'); // Default insulation temperature rating
    const results = ref(null);

    const calculateResults = () => {
      const current = 16; // Example current value
      const percentageAmpacity = '60%'; // Example percentage of allowable ampacity

      const correctionEntry = loadStore.tables.tableD3b.find(entry => entry.insulationTemperature === insulationTemp.value);
      if (!correctionEntry) {
        results.value = { error: 'Invalid insulation temperature rating' };
        return;
      }
      const correctionFactor = correctionEntry.correctionFactors[percentageAmpacity];
      if (!correctionFactor) {
        results.value = { error: 'Invalid percentage of allowable ampacity' };
        return;
      }

      const maxRunDistance = loadStore.calculateMaxRunDistance(
        wireSize.value,
        current,
        voltage.value,
        voltageDrop.value,
        insulationTemp.value,
        percentageAmpacity
      );

      const voltageDropResult = loadStore.calculateVoltageDrop(
        wireSize.value,
        current,
        voltage.value,
        maxRunDistance,
        insulationTemp.value,
        percentageAmpacity
      );

      results.value = {
        current,
        baseDistance: (maxRunDistance / (voltageDrop.value / 100)).toFixed(2),
        correctionFactor,
        maxRunDistance,
        voltageDrop: voltageDropResult
      };
    };

    return {
      wireSize,
      voltage,
      voltageDrop,
      insulationTemp,
      results,
      calculateResults
    };
  }
};
</script>

<style scoped>
.form-group:nth-child(odd) {
  background-color: white;
}
.form-group:nth-child(even) {
  background-color: lightgray;
}
</style>
