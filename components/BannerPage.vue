<template>
        <div class="container py-14 relative">
            <div class="relative z-20">
                <h1 data-aos="fade-up" data-aos-delay="300" class="py-8 tracking-wider text-2xl font-semibold text-black text-center">
                    Make your own <span class="font-semibold text-pink-600">SHAKE</span>
                </h1>
                <!--Text-Content-Section-->
                <div  class="space-y-10">
                   <div data-aos="fade-up" data-aos-delay="500" class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div>
                      <p>While you wait for your order, play a fun <span class="text-pink-400">game</span> of creating your milkshake. 
                        Make your own customize shake with variety of flavours</p>  
                    </div>
                    <div></div>
                   </div> 
                
                
                   <div data-aos="fade-up" data-aos-delay="300" class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div></div>
                    <div>
                      <p>While you wait for your order, play a fun <span class="text-pink-400">game</span> of creating your milkshake. 
                        Make your own customize shake with variety of flavours</p>  
                    </div>
                   
                  
                </div>
              </div>
                <!--Button-Section-->
               <div data-aos="fade-up"
               data-aos-delay="500"
               data-aos-offset="0" class="flex justify-center mt-10 sm:mt-14">
              <NuxtLink to="/createshake">
                <button class="rounded-full hover:bg-rose-500 bg-rose-400 h-[40px] text-white px-3 py-2"> Create Your Shake</button>
              </NuxtLink>
                </div>

            </div>
            <!--Bg shakes animation-->
            <!--img1-->
            <div data-aos="fade-right" class="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <img data-aos="fade-right" src="../public/img/cup1.png" class="max-w-[160px]" />
            </div>
            <!--img2-->
            <div data-aos="fade-right" class="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <img src="../public/img/cup.png" class="max-w-[260px]" />
            </div>
            <!--img3-->
            <div data-aos="fade-left" class="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
                <img src="../public/img/cup2.png" class="max-w-[200px]" />
            </div>
            <!--img4-->
            <div data-aos="fade-left" class="hidden sm:block absolute bottom-0 right-0" >
                <img src="../public/img/cup4.png" class="max-w-[200px]" />
            </div>
            <!--img5-->
            <div data-aos="fade" class="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100" >
                <img src="../public/img/cup3.png" class="max-w-[180px]" />
            </div>
        </div>
</template>