<template>
  <div>
    <h2>Conduit Fill Calculator</h2>
    <form @submit.prevent="calculateFill">

      <!-- Dropdown for selecting conduit type -->
      <div>
        <label for="conduitType">Conduit Type:</label>
        <select id="conduitType" v-model="loadStore.selectedConduitType">
          <option v-for="conduitType in loadStore.conduitTypes" :key="conduitType" :value="conduitType">
            {{ loadStore.formattedConduitTypes(conduitType) }} 
              <!-- {{ conduitType }} -->
          </option>
        </select> 
      </div>

      <!-- Input for selecting conduit size -->
      <div>
        <label for="conduitSize">Conduit Size:</label>
          <select id="conduitSize" v-model="loadStore.conduitSize">
          <option v-for="(size, index) in loadStore.conduitSizes" :key="index" :value="size">{{ size }}</option>
        </select> 
      </div>

     <!-- Dropdown for selecting wire type -->
     <div>
        <label for="selectedWireType">Please select Wire Type:</label>
     <select id="selectedWireType" v-model="loadStore.selectedWireType" @change="updateConductorOptions">
          <option v-for="wireType in loadStore.combinedWireTypes" :key="wireType" :value="wireType">
             {{ loadStore.formattedWireTypes(wireType) }}
              <!-- {{  wireType }} -->
          </option>
        </select>
      </div>

      <!-- Conditionally display stranded or solid dropdown based on available options -->
      <div v-if="loadStore.showConductorSelection">
        <label for="strandOrSolidWire">Stranded or Solid Wire:</label>
         <select id="strandOrSolidWire" v-model="loadStore.strandOrSolidWire" @change="updateWireSizes">
          <option value="strandedConductors">Stranded Conductors</option>
          <option value="solidConductors">Solid Conductors</option>
        </select>
      </div>

      <!-- Input for selecting wire size -->
      <div>
        <label for="wireSize">Wire Size (AWG):</label>
        <select id="wireSize" v-model="loadStore.wireSize"  @change="updateWireSizes">
          <option v-for="(size, index) in loadStore.wireSizes" :key="index" :value="size" >{{ size }}</option>
        </select>
      </div>

      <!-- Input for number of conductors -->
      <div>
        <label for="numConductors">Number of Conductors:</label>
        <input id="numConductors" type="number" v-model.number="loadStore.numConductors" />
      </div>

      <!-- Add a dropdown for cable type -->
<!-- Checkbox or radio buttons for lead-sheathed option -->
<div>
  <label for="isLeadSheathed">Is Cable Lead Sheathed?&nbsp;&nbsp;</label>
  <input type="checkbox" id="isLeadSheathed" v-model="loadStore.isLeadSheathed" />
</div>


      <button type="submit">Calculate Fill</button>
     
    </form>

    <!-- Display results if calculated -->
    <div v-if="loadStore.result">
      <h3>Results:</h3>
      <!-- <p>Maximum Fill Percentage: {{ loadStore.calculateMaxFillPercentage(loadStore.numConductors,
        loadStore.isLeadSheathed) * 100 }}%</p> -->
      <p>Total Wire Area This Select: {{ loadStore.getWireArea }} mm²</p>
      <!-- <p>Conduit Area: {{ loadStore.getConduitArea }} mm²</p>
      <p v-if="loadStore.isTotalFillValid">The conduit fill is within allowable limits.</p>
      <p v-else>The conduit fill exceeds allowable limits.</p> -->
    </div>

    <!-- 显示已添加的导线面积 -->
    <div v-if="loadStore.totalAreas.length > 0">
      
      <p>Select history:</p>
      <ul>
        <li v-for="(data, index) in loadStore.wireHistory" :key="index">
          {{ index + 1 }}: &#9; {{ data.name }} Size {{ data.size }}<br>
          &nbsp;&nbsp; &#9; {{ data.type }}<br>
          &nbsp;&nbsp; &#9;Numbers:&#9; {{ data.num }}<br>
          &nbsp;&nbsp; &#9;Area:&#9; {{ data.area }} Occupancy: {{ (data.area / loadStore.getConduitArea).toFixed(2)*100 }}% <br>
        </li>
      </ul>
      <p>Total Wire Area: {{ loadStore.accumulatedWireArea.toFixed(2) }} mm²</p>
      <p>{{loadStore.selectedConduitType}} Area: {{ loadStore.getConduitArea }} mm²</p>
      <p>Your conduit occupancy: {{ (loadStore.accumulatedWireArea / loadStore.getConduitArea).toFixed(2) * 100 }}%</p>
      <p>Total Wire Count: {{ loadStore.totalWireCount }}</p>
      <p v-if="!loadStore.isWireCountValid" style="color:red">Error: Total wire count exceeds 200!</p>
      <div v-if="loadStore.isTotalFillValid">The conduit fill is within allowable limits  {{ loadStore.maxFillPercentage }}.</div>
      <div v-else>The conduit fill exceeds allowable limits: {{ loadStore.maxFillPercentage }}</div>
    </div>
     <!-- 清空导线面积 -->
     <button @click="clearAllAreas" v-if="loadStore.result">Clear All</button>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useLoadStore } from '../store';

export default {
  setup() {
    const loadStore = useLoadStore();

    // Watch for changes in selectedWireType to update wire sizes and options
    watch(() => loadStore.selectedWireType, () => {
      loadStore.updateConductorOptions();
      loadStore.updateWireSizes(); // Automatically update wire sizes when the wire type changes
    });

    // Watch for changes in selectedConduitType to update conduit area
    watch(() => loadStore.selectedConduitType, () => loadStore.getConduitArea );

    // Watch for changes in conduitSize to update conduit area
    watch(() => loadStore.conduitSize, () => loadStore.getConduitArea );   //   loadStore.totalAreas.push(loadStore.getTotalWireArea);
   

    // Function to calculate the fill
    const calculateFill = () => {
      loadStore.calculateFill();
    };

    // Function to clear all areas
    const clearAllAreas = () => {
      loadStore.clearAreas(); // 清空所有累加面积和导线根数
    };

    return {
      loadStore,
      calculateFill,
      clearAllAreas
    };
  },
};
</script>

<style scoped>
form {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  font-size: 12px;
}

button {
  width: fit-content;
  margin-bottom: 10px;
  align-self: center;
  background-color: lightblue;
  border: 1px solid rgb(126, 83, 24);
  font-size: 14px;
}

p {
  font: 300 12px arial-narrow small-caps;
  line-height: 3px;
}

li {
  font-size: 10px;
  border: 1px dashed blue;
}
</style>
