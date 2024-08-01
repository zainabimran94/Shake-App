<template>
  <section class="h-screen bg-fuchsia-600 flex justify-center">
    <div class="text-center py-10">
      <h1 class="text-4xl w-96 mx-auto leading-normal font-bold mb-12">Choose from our Categories</h1>
      <div class="flex max-w-5xl mx-auto gap-8">
        <div v-for="category in categories" :key="category.id">
          <div class="bg-white/10 p-8 rounded-xl">
            <img :src="category.image" alt="" class="h-20 mx-auto" />
            <h5 class="uppercase text-xl font-bold">{{ category.name }}</h5>
            <p class="text-sm leading-7 my-3 font-lighter opacity-50">{{ category.desc }}</p>
            <NuxtLink :to="`/category/${category.slug}`" class="text-white font-bold bg-blue-500 p-2 rounded">{{ category.name }}</NuxtLink>
            
          </div>
        </div>
      </div>
    </div>
   
  </section>
</template>

<script setup>
const categories= ref([
    {
        id: 1,
        name: 'Pizza',
        desc: 'Delicious hand-tossed pizza with fresh toppings.',
        slug: 'Pizza',
        image: '/img/pizza.jpg'
    },
    {
        id: 2,
        name: 'Pasta',
        desc: 'Delicious hand-tossed pasta with fresh toppings.',
        slug: 'Pasta',
        image: '/img/pasta.jpg'
    },
    {
        id: 3,
        name: 'Shake',
        desc: 'Yummy ice cold shakes.',
        slug: 'Shake',
        image: '/img/shake.webp'
    },
    {
        id: 4,
        name: 'Sweet',
        desc: 'Delicious sweet with fresh toppings.',
        slug: 'Sweet',
        image: '/img/delight.jpg'
    },
])
</script>