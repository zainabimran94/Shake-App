<template>
  <div class="relative z-0 bg min-h-screen">
    <div class="container py-16 sm:py-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
        <!--List Section-->
        <div class="space-y-7 text-slate-900 order-2 sm:order-1">
          <h1 class="font-cursive text-5xl">Make Your Shake</h1>
          <ul class="flex flex-col gap-6">
            <li class="w-full ">
              <label class="block text-2xl font-cursive mb-2">Cream</label>
              <SelectMenu 
                v-model="creamValue"
                :options="newCreamOptions"
                class="w-full p-2 border border-teal-300 rounded-md"
              />
            </li>
            <li class="w-full">
              <label class="block text-2xl font-cursive mb-2">Milk</label>
              <SelectMenu
                v-model="milkValue"
                :options="newMilkOptions"
                class="w-full p-2 border border-teal-300 rounded-md"
              />
            </li>
            <li class="w-full">
              <label class="block text-2xl font-cursive mb-2">Syrup</label>
              <SelectMenu
                v-model="syrupValue"
                :options="newSyrupOptions"
                class="w-full p-2 border border-teal-300 rounded-md"
              />
            </li>
            <li class="w-full">
              <label class="block text-2xl font-cursive mb-2">Tubule</label>
              <SelectMenu
                v-model="tubuleValue"
                :options="newTubuleOptions"
                class="w-full p-2 border border-teal-300 rounded-md"
              />
            </li>
          </ul>
          <!--Button-->
          <button @click="createShake" class="rounded-full hover:bg-rose-500 bg-rose-400 h-[40px] text-white px-3 py-2">
            Make Your Shake
          </button>
        </div>
        <!--Image Section (Hidden on small screens)-->
        <div data-aos="zoom-in" data-aos-delay="500" class="relative z-30 order-1 sm:order-2 hidden sm:block">
          <img src="../public/img/cup2.png" alt="image" class="w-full sm:scale-125 sm:translate-y-16"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import SelectMenu from '~/components/SelectMenu.vue'; 
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

<style>
.bg{
 background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
 background-position: "center";
 background-repeat: no-repeat;
 background-size: cover;
 width: "100%";
 height: "100%";
}
</style>

