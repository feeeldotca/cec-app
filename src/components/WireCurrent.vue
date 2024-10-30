<template>
    <div>
        <h2>Wire Current Calculator</h2>

        <!-- 导线材质选择 -->
        <label for="material">Wire Material/Installation:</label>
        <select id="material" v-model="loadStore.selectedMaterial">
            <option value="cu1">Single Cu in free air</option>
            <option value="cu2">Multiple Cu in Raceway/Cable</option>
            <option value="al1">Single Al in free air</option>
            <option value="al2">Multiple Al in Raceway/Cable</option>
        </select>
        <!-- Table 5B Correction factors for Tables 1 and 3 (where from two to four single
        insulated conductors are present and spaced less than 25% of the largest cable diameter)
        (See Rule 4-004 and Tables 1 and 3.) -->
        <div v-if="(loadStore.selectedMaterial == 'cu1' || loadStore.selectedMaterial == 'al1')">
            <label for="spacedLessThan25" title="Spaced less than 25% of the largest cable diameter">
                Table 5B applies on Table 1 and 3&nbsp;
                <input type="checkbox" id="spacedLessThan25" v-model="loadStore.isSpacedLessThan25"></label>
        </div>
        <div v-else-if="(loadStore.selectedMaterial == 'cu2' || loadStore.selectedMaterial == 'al2')">
            <label for="table5C" title="Table 5C Applies on Table 2 and 4">
                <!-- Ampacity correction factors for Tables 2 and 4"> -->
                Table 5C applies on Table 2 and 4&nbsp;
                <input type="checkbox" id="table5C" v-model="loadStore.isTable5C"></label>
        </div>
        <div>
            <!-- 线号大小 -->
            <label for="wireSize">Wire Size:</label>
            <select id="wireSize" v-model="loadStore.selectedWireSize">
                <option v-for="size in loadStore.cuAlWireSizes" :key="size" :value="size">{{ size }}</option>
            </select>
        </div>

        <div>
            <!-- 绝缘温度等级 -->
            <label for="insulation">Insulation Temp Rating (°C):</label>
            <select id="insulation" v-model="loadStore.selectedInsulation">
                <option v-for="(op, key) in loadStore.getInsulationOptions" :key="op" :value="key">{{ key }}°C</option>
            </select>
        </div>
        <div>
            <!-- 环境温度选择 -->
            <label for="ambientTemperature">Ambient Temperature (°C):</label>
            <select id="ambientTemperature" v-model="loadStore.selectedAmbientTemperature">
                <option v-for="(factor, key) in loadStore.getAmbientTemperatureOptions" :key="key" :value="factor">{{
                    factor
                }}°C</option>
            </select>
        </div>
        <div>
            <!-- 导线根数 -->
            <label for="numWires">Number of Wires:</label>
            <select id="numWires" v-model="loadStore.selectedNumWires">
                <option v-for="(num, key) in numWiresOptions" :key="num" :value="key">{{ num }}</option>
            </select>
        </div>
    </div>
    <div>

    <!-- Calculate Button and Result Display -->
    <button @click="loadStore.calculateCurrent">Calculate Current</button>
    <div v-if="loadStore.calculatedCurrent">
      <p>Calculated Safe Current: {{ loadStore.calculatedCurrent }} A</p>
    </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useLoadStore } from '../store'; // 假设store文件名为loadStore.js

export default {
    setup() {
        const loadStore = useLoadStore();

        // 计算导线尺寸
        //   const wireSizes = computed(() => loadStore.cuAlWireSizes);

        // 获取绝缘温度选项
        //   const insulationOptions = loadStore.getInsulationOptions;

        // 获取环境温度选项
        //   const ambientTemperatureOptions = loadStore.getAmbientTemperatureOptions;

        // 动态获取导线根数选项
        const numWiresOptions = computed(() =>
        (loadStore.isSpacedLessThan25 ? [1, 2, 3, 4] :
            (loadStore.isTable5C ? ["1~3", "4~6", "7~24", "25~42", "43 and up"] :
                Array.from({ length: 100 }, (_, index) => index + 1))
        ));


        //   const handleNumWiresChange = () => {
        //     if(!loadStore.isSpacedLessThan25){
        //         loadStore.selectedNumWires = loadStore
        //     }
        // if (loadStore.selectedNumWires > 4) {
        //   loadStore.isSpacedLessThan25 = false;
        // }
        //   };

        // 调用 store 中的函数计算电流
        const calculateCurrent = computed(() => {
            if (!loadStore.selectedWireSize || !loadStore.selectedInsulation || !loadStore.selectedAmbientTemperature) {
                alert('Please select all options.');
                return;
            }
            return loadStore.calculateCurrent();
        });

        //    {
        //   if (!selectedWireSize.value || !selectedInsulation.value || !selectedAmbientTemperature.value) {
        //     alert('Please select all options.');
        //     return;
        //   }
        //   calculatedCurrent.value = loadStore.calculateCurrent({
        //     wireSize: loadStore.selectedWireSize.value,
        //     material: loadStore.selectedMaterial.value,
        //     insulation: loadStore.selectedInsulation.value,
        //     ambientTemp: loadStore.selectedAmbientTemperature.value,
        //     numWires: loadStore.selectedNumWires.value,
        //     isSpacedLessThan25: loadStore.isSpacedLessThan25.value,
        //   });
        // };

        return {
            loadStore,
            // calculatedCurrent,
            // wireSizes,
            // insulationOptions,
            // ambientTemperatureOptions,
            numWiresOptions,
            // handleNumWiresChange,
            calculateCurrent,
        };
    },
};
</script>