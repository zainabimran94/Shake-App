<template>
    <section class="h-screen bg-fuchsia-600 flex justify-center">
      <div class="text-center py-10">
        <h1 class="text-4xl w-96 mx-auto leading-normal font-bold mb-12">{{ category}} Items</h1>
        <div class="flex max-w-5xl mx-auto gap-8">
          <div v-for="item in filteredItems" :key="item.id" class="bg-white/10 p-8 rounded-xl">
            <img :src="item.image" alt="" class="h-20 mx-auto" />
            <h5 class="uppercase text-xl font-bold">{{ item.name }}</h5>
            <p class="text-sm leading-7 my-3 font-lighter opacity-50">{{ item.desc }}</p>
            <button @click="addItem(item)" class="bg-green-500 text-white py-2 px-4 rounded">Add to Cart</button>
            <p class="text-white mx-4">Quantity: {{ getItemCount(item.id) }}</p>
          <button @click="removeItem(item.id)" class="bg-red-500 text-white py-2 px-4 rounded">Remove from Cart</button>
        </div>
        </div>
        <div class="text-center mt-8">
        <p class="text-white">Total Cart Items: {{ cartItemCount }}</p>
      </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import  useCart  from '~/composables/useCart';

  // Simulated data source
  const items = ref([
    { id: 1, name: 'Pepperoni Pizza', category: 'Pizza', desc: 'Delicious hand-tossed pizza with fresh toppings.', image: '/img/pizza1.jpg' },
    { id: 2, name: 'Veggie Pizza', category: 'Pizza', desc: 'Delicious hand-tossed pizza with fresh toppings.', image: '/img/pizza2.jpg' },
    { id: 3, name: 'Mac n Cheese', category: 'Pasta', desc: 'Hearty and savory pasta dishes for all tastes.', image: '/img/pasta1.jpeg' },
    { id: 4, name: 'Fettucine', category: 'Pasta', desc: 'Hearty and savory pasta dishes for all tastes.', image: '/img/pasta2.jpg' },
    { id: 5, name: 'Chocolate Shake', category: 'Shake', desc: 'Creamy and refreshing shake in various flavors.', image: '/img/shake1.jpg' },
    { id: 6, name: 'Mango Shake', category: 'Shake', desc: 'Creamy and refreshing shake in various flavors.', image: '/img/shake2.jpg' },
    { id: 7, name: 'Cake', category: 'Sweet', desc: 'Indulgent and sweet desserts to satisfy your cravings.', image: '/img/sweet1.jpg' },
    { id: 8, name: 'Eclair', category: 'Sweet', desc: 'Indulgent and sweet desserts to satisfy your cravings.', image: '/img/sweet2.webp' }
  ]);
  
  const route = useRoute();
  const category = route.params.category;
  
  const filteredItems = computed(() => items.value.filter(item => item.category === category));
  
  const { addItemToCart, removeItemFromCart, getCartItems, getCartItemCount } = useCart();


 const addItem = (item) => {
  addItemToCart(item);
};

 const removeItem = (itemId) => {
  removeItemFromCart(itemId);
};

const cartItemCount = computed(() => getCartItemCount());
  
const getItemCount = (itemId) => {
const cartItems = getCartItems();
  return cartItems.filter(item => item.id === itemId).length;
};

  </script>
  