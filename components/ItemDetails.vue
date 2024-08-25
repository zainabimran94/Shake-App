<template>
  <section class="relative z-0 bg1 min-h-screen">
    <div class="container py-16 sm:py-0 lex justify-center w-full">
      <div v-if="item" class="text-slate-900 px-2 text-center py-2 order-2 sm:order-1">
        <h1 class="text-4xl font-semibold">{{ item.name }} </h1>
      </div>
      <div v-if="item" class="bg-white bg-opacity-20 shadow-lg p-6 max-w-screen-2xl flex flex-col items-center">
      <img :src="item.image" alt="" class="h-80 w-72 object-cover rounded-t-xl" /> 
      <div class="px-2 py-3 w-72">
        <p class="text-lg mr-3 font-medium opacity-70 ">{{ item.desc }}</p>
        <p class="text-lg font-semibold text-black cursor-auto my-3">US${{ item.price }}</p>
        <div class="flex items-center justify-between mt-4">
               <Nuxtlink :to="'/cart'">
                <button @click="addItem(item)" class=" hover:bg-rose-500 bg-rose-400 text-white px-4 py-2">
                Add to Cart
              </button>
              </Nuxtlink> 
        <div class="ml-auto">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />                      
         </svg> 
        </div>
      </div>
      </div>
      </div>
    </div>
  </section>
  
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import { useCart } from '@/composables/useCart.js';
 
 const { addCart} = useCart();

 
  const router= useRouter()
  const route = useRoute();
  const id = route.params.id
  const item = ref(null)
  

  
  const getItem = async () => {
    try{
        const data = await $fetch(`/api/cart/${id}`,{
         method: 'GET',
        });
        item.value = data.find((item) => item.id == id) || {};
      } catch (e) {
        console.error(e)
      }
   };

  const addItem = async (item) => {
  addCart(item); router.push('/cart')
 };

  onMounted(() => {
  getItem()
 
});
  
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
  