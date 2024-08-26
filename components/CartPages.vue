<template>
  <section class="relative z-0 bg2 min-h-screen">
    <div class="container py-16 sm:py-0 lex justify-center w-full">
       <div v-if="pending" class="text-slate-900 text-2xl p-6 text-center order-2 sm:order-1">
        Loading...
        </div>
        <div v-else-if="cart.length === 0" class="text-slate-900 text-2xl p-6 text-center order-2 sm:order-1">
        Your cart is empty.
        </div>
     <div v-else>
           <div class="text-slate-900 px-2 text-center order-2 sm:order-1">
            <h1 class="text-4xl text-center font-semibold p-4 ">Your Cart</h1>
            </div>
           <!--Items-->
        <div v-for="item in cart" :key="item?.id" class="bg-white bg-opacity-20 flex flex-col py-6 px-6 text-center">
            <img :src="item.image" alt="" class="h-40 m-auto" />
            <h2 class="text-2xl font-bold mt-4">{{ item.name }}</h2>
            <p class="text-lg font-inter mt-2 ">${{ item.price }}</p>
            <p class="text-md font-inter text-black mt-2">Quantity: {{ item.quantity }}</p>
            <!--Buttons-->
          <div class="items-center mt-2 ">
            <button class="hover:bg-rose-200 hover:rounded-lg" @click="decrementQuantity(item.id, item.quantity)">-</button>
            <span class="px-4">{{ item.quantity }}</span>
            <button class="hover:bg-rose-200 hover:rounded-lg" @click="incrementQuantity(item.id, item.quantity)">+</button>
          </div>
          <div class="items-center mt-2 ">
            <button @click="deleteItem(item.id)" class=" hover:bg-rose-500 bg-rose-400 rounded-full text-white px-6 py-2">
               Delete
              </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script setup>
 import { onMounted } from 'vue';
 import { useCart } from '@/composables/useCart.js';
 
 const { cart, getCart, updateCart, deleteCart} = useCart();

 const pending = ref(true);

const incrementQuantity = (itemId, quantity) => {
  updateCart(itemId, quantity +1 );
  };

const decrementQuantity = (itemId, quantity) => {
  updateCart(itemId, quantity -1 );
  };

 const deleteItem = async (itemId) => {
  await deleteCart(itemId);}

  const fetchCart = async () => {
  pending.value = true;
  try {
    await getCart();
  } catch (e) {
    console.error('Error fetching cart:', e);
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchCart();
});

</script>

  <style>
  .bg2 {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-position: "center";
  background-repeat: no-repeat;
  background-size: cover;
  width: "100%";
  height: "100%";
 }
 </style>
  
 
  