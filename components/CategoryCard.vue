<template>
  <div class="relative z-0 bg1 min-h-screen">
    <div class="container py-16 sm:py-0">
      <!--heading SECTION-->
      <div class="text-slate-900 px-6 text-center py-6 order-2 sm:order-1">
        <h1 class="text-4xl">Choose from our Categories</h1>
      </div>
      <!--Card Section-->
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 py-6 gap-8">
        <div v-for="category in categories" :key="category.id" class="bg-white/10 p-8 rounded-xl ">
        <img :src="category.image" class="sm:h-30 lg:h-20 mx-auto" />
        <h5 class="uppercase text-xl font-bold text-center ">{{ category.name }}</h5>
        <p class="text-sm leading-7 my-3 font-medium opacity-70 text-center">{{ category.desc }}</p>
        <div class="flex flex-col items-center">
        <NuxtLink :to="`/category/${category.slug}`">
        <button class="rounded-full hover:bg-rose-500 bg-rose-400  text-white px-6 py-2">{{ category.name }}
        </button>
        </NuxtLink>
      </div>
      </div>
      </div>
    </div>
  </div> 
</template>

<script setup>
  import useCategories from '~/composables/useCategories';

  const { categories } = useCategories();
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