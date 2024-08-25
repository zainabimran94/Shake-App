
<template>
  <div class="relative z-0 bg"> <!--you might need to change it because of mobile responsivness z-index-->
      <div class="container py-16 sm:py-0">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <!--text-content section-->
          <div class="space-y-7 text-slate-900 order-2 sm:order-1">
            <h1 data-aos="fade-up" class="text-5xl">Nothing Brings People <span class="text-teal-600 font-cursive text-7xl">together</span> Like Good Food</h1>
            <p data-aos="fade-up" data-aos-delay="300" class="lg:pr-64">Delicious Meals and Shakes delivered at your door</p>
            <!--Button Section-->
            <div data-aos="fade-up" data-aos-delay="500" class="flex items-center z-10 ">
            <NuxtLink to="/main">
            <button class="rounded-full hover:bg-rose-500 bg-rose-400 h-[40px] text-white px-3 py-2">Choose from our Menu </button>
            </NuxtLink> 
            </div>
          </div>
           <!--Image Section-->
           <div data-aos="zoom-in" data-aos-delay="500" class="relative z-30 order-1 sm:order-2">
            <img src="../public/img/hero3.png" alt="image" class="w-full sm:scale-125 sm:translate-y-16"/>
           </div>
        </div>   
      </div>
  </div>
           
           
</template>

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

