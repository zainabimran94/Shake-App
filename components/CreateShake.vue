<template>
  <div class="flex flex-col md:flex-row w-full h-screen">
    <div class="w-full md:w-1/2 p-8 bg-gray-100 flex flex-col items-start space-y-6">
      <h1 class="text-4xl font-bold">Create your own Shake</h1>
      <ul class="space-y-4">
      <li>
        <label class="block text-lg font-semibold mb-2">Cream</label>
        <SelectMenu 
          placeholder="Select Cream"
          v-model="creamValue"
          :options="newCreamOptions"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
      </li>
      
      <li>
        <label class="block text-lg font-semibold mb-2">Milk</label>
        <SelectMenu
          v-model="milkValue"
          :options="newMilkOptions"
          placeholder="Select Milk"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
      </li>
      
      <li>
        <label class="block text-lg font-semibold mb-2">Syrup</label>
        <SelectMenu
          v-model="syrupValue"
          :options="newSyrupOptions"
          placeholder="Select Syrup"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
      </li>
      
      <li>
        <label class="block text-lg font-semibold mb-2">Tubule</label>
        <SelectMenu
          v-model="tubuleValue"
          :options="newTubuleOptions"
          placeholder="Select Tubule"
          class="w-full p-2 border border-gray-300 rounded-md"
        />
      </li>
    </ul>
    <button @click="createShake" class="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
        Create Shake
      </button>
    </div>
    
    
<div class="w-full md:w-1/2 flex justify-center items-center">
<svg width="325" height="466" viewBox="0 0 325 466" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5663 29.3531C20.3387 17.5526 29.5947 7.28381 41.459 7.28381H284.767C296.658 7.28381 305.923 17.5964 304.653 29.4192L260.227 443.135C259.136 453.296 250.561 461 240.342 461H84.4965C74.252 461 65.6639 453.259 64.6039 443.069L21.5663 29.3531Z" stroke="#D3ECFF" stroke-width="10"/>
<rect width="325" height="24" rx="12" fill="#D2EAFD"/>
<line x1="61.9302" y1="107.391" x2="87.8384" y2="373.134" stroke="white" stroke-width="15" stroke-linecap="round"/>
</svg>
</div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import SelectMenu from '~/components/SelectMenu.vue'; // Adjust the path accordingly
import { useShake } from '~/composables/useShake';

const router = useRouter();
const { creamOptions, milkOptions, syrupOptions, tubuleOptions } = useShake();

const newCreamOptions = computed(() => creamOptions.value.map(([label, value]) => ({ label, value })));
const newMilkOptions = computed(() => milkOptions.value.map(([label, value]) => ({ label, value })));
const newSyrupOptions = computed(() => syrupOptions.value.map(([label, value]) => ({ label, value })));
const newTubuleOptions = computed(() => tubuleOptions.value.map(([label, value]) => ({ label, value })));

const creamValue = ref(creamOptions.value[0][1]);
const milkValue = ref(milkOptions.value[0][1]);
const syrupValue = ref(syrupOptions.value[0][1]);
const tubuleValue = ref(tubuleOptions.value[0][1]);

const createShake = () => {
  router.push(`/createshake/shake?cream=${creamValue.value}&milk=${milkValue.value}&syrup=${syrupValue.value}&tubule=${tubuleValue.value}`);
};
</script>

