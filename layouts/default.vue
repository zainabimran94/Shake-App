<template>
    <div class="bg-rose-300 shadow-md ">
        <div class="container flex justify-between py-4 sm:py-3">
            <!--NavLink Logo-->
            <NuxtLink to="/">
            <div class="font-bold text-3xl"><span class=" text-white ">𝒯𝒶𝓈𝓉𝒾ℯ𝓈</span></div>
            </NuxtLink>
            <!--NavLink Section-->
            <div>
                <ul class="flex items-center gap-10">
                    <li v-for="link in navLinks" :key="link.path">
                     <NuxtLink :to="link.path" class="hidden sm:inline-block hover:text-pink-800 text-ul font-semibold">
                     {{ link.name }}
                     </NuxtLink>
                      </li>  
                 <!--simple dropdown-->
                 <li class="md:block inline-block font-semibold">
                 <UDropdown  class="text-ul relative z-3 " :items="items" mode="hover" :popper="{ placement: 'bottom-start' }" >
                  <UButton color="white"  variant="link" class="hover:text-rose-800 text-ul items-center gap-2 py-2 px-4 " label="Categories" trailing-icon="i-heroicons-chevron-down-20-solid" />
                 </UDropdown>
                 </li>
                </ul>
            </div>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
 import useCategories from '~/composables/useCategories';

 const { categories } = useCategories();

 const items= computed(() => 
 [  categories.value.map(category => ({
    label: category.name,
    to: `/category/${category.slug}`
  }))
]

);
 const navLinks = ref([
  { path: '/main', name: 'Menu' },
  { path: '/createshake', name: 'MilkShake' },
  { path: '/cart', name: 'Cart' }
]);

  
</script>