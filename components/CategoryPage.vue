<template>
    <section class="relative z-0 bg1 min-h-screen">
     <div class="container py-16 sm:py-0">
      <div class="text-slate-900 px-6 text-center py-6 order-2 sm:order-1">
        <h1 class="text-4xl font-semibold">{{ category }} </h1>
      </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-6 gap-8">
          <div v-for="item in items" :key="item?.id" class="bg-white/10 p-8 rounded-xl">
            <img :src="item.image" alt="" class="sm:h-30 lg:h-20 m-auto" />
            <h5 class="uppercase text-xl font-bold">{{ item.name }}</h5>
            <p class="text-sm leading-7 my-3 font-medium opacity-70">{{ item.desc }}</p>
            <p class="text-lg font-semibold mb-3">US${{(item.price) }}</p> 
            <div class="flex flex-col items-center">
            <nuxt-link :to="`/item/${item.id}`">
              <button class="rounded-full hover:bg-rose-500 bg-rose-400  text-white px-6 py-2">
                Order Now
              </button>
            </nuxt-link>
       
            </div>
          </div>
       
        </div>
     </div>
    </section>
  </template>
  
  <script setup>
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    
  
    const route = useRoute();
    
    const category = route.params.category;
  
    const items = ref([]);
  
   const { data, error } = await useFetch(`/api/items/${category}`);
  
 // Handle error if needed
    if (error.value) {
  } else if (data.value) {
  items.value = Array.isArray(data.value) ? data.value : [];
 
  };
  
  
</script>

<style>
.bg1{
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  background-position: "center";
  background-repeat: no-repeat;
  background-size: cover;
  width: "100%";
  height: "100%";
}
</style>