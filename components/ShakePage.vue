<template>
    <div class="items-center justify-center w-full h-screen bg-gray-100">
      <div class="relative w-64 h-64">
        <div id="svg" class="shake absolute inset-0 w-full h-full">
          <svg width="325" height="682" viewBox="0 0 325 682" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect id="tubule" width="505.937" height="16.1292" rx="8.06461" transform="matrix(-0.132561 0.991175 -0.993395 -0.114743 217.828 1.85071)" />
            <path id="milk" d="M26.4902 292.227C25.1622 280.373 34.4383 270 46.3658 270H279.554C291.51 270 300.795 280.421 299.421 292.298L256.978 659.298C255.812 669.387 247.268 677 237.111 677H87.4823C77.2983 677 68.7405 669.347 67.6067 659.227L26.4902 292.227Z"/>
            <path id="cream" d="M302 235.897C302 280.566 301.954 320.343 163.001 316.777C21.8866 313.156 24.0018 280.566 24.0018 235.897C24.0018 207.875 132.303 198.441 150.993 133.62C152.955 126.814 159.933 122.073 166.552 124.599C247.609 155.531 302 221.852 302 235.897Z"/>
            <path id="syrup" d="M59 626H266L257.905 677L68.6369 674.295L59 626Z"/>
            <path d="M21.5663 245.353C20.3387 233.553 29.5947 223.284 41.459 223.284H284.767C296.658 223.284 305.923 233.596 304.653 245.419L260.227 659.135C259.136 669.296 250.561 677 240.342 677H84.4965C74.252 677 65.6639 669.259 64.6039 659.069L21.5663 245.353Z" stroke="#D3ECFF" stroke-width="10"/>
            <rect y="216" width="325" height="24" rx="12" fill="#D2EAFD"/>
            <line x1="61.9302" y1="323.391" x2="87.8384" y2="589.134" stroke="white" stroke-width="15" stroke-linecap="round"/>
            <path id="cap" d="M302 218.047C145.439 220.192 248.805 218.047 170.657 218.047C92.5089 218.047 208.484 218.928 19 218.047C19 150.09 82.3517 95 160.5 95C238.648 95 302 150.09 302 218.047Z" fill="#D2EAFD" fill-opacity="0.5"/>
          </svg>
        </div>
      </div>
      <h1 id="shakeText" class="mt-8 text-4xl font-bold text-center">{{ shakeName }} Milkshake</h1>
      
      <button class="mt-4 text-red-600" id="shakeButton" @click="toCreate">Back</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useShake } from '~/composables/useShake';
  import anime from 'animejs';
  
  const router = useRouter();
  const route = useRoute();
  const { milkOptions } = useShake();
  
  // Get query parameters
  const { cream, milk, syrup, tubule } = route.query;
  
  const shakeName = ref("shake");
  
  // Function to navigate back to create page
  const toCreate = () => {
    router.push('/main');
  };
  
  // Set shake name based on milk flavor
  onMounted(() => {
  const milkColorCode = route.query.milk; // This is the color code from the query
  const milkOption = milkOptions.value.find(option => option[1] === milkColorCode);

  if (milkOption) {
    shakeName.value = milkOption[0]; // Set shakeName to the milk name
  } else {
    shakeName.value = 'Vanilla'; // Default to Vanilla if no match is found
  }
    // Animation using Anime.js
    anime.timeline()
      .add({
        targets: '#svg',
        duration: 1000,
        left: "50%",
        top: "50%",
      })
      .add({
        targets: '#box2',
        duration: 300,
        top: '-10%',
      })
      .add({
        targets: '#box1',
        duration: 300,
        top: '-4%',
      })
      .add({
        targets: '#syrup',
        duration: 300,
        opacity: 1,
        scaleY: '100%',
        easing: 'easeInOutQuad',
        fill: `#${syrup}`,
      })
      .add({
        targets: '#milk',
        duration: 300,
        opacity: 1,
        scaleY: '100%',
        easing: 'easeInOutQuad',
        fill: `#${milk}`,
      })
      .add({
        targets: '#cream',
        duration: 300,
        opacity: 1,
        scaleY: '100%',
        easing: 'easeInOutQuad',
        fill: `#${cream}`,
      })
      .add({
        targets: '#box2',
        duration: 500,
        top: '-35%',
        easing: 'spring',
      })
      .add({
        targets: '#box1',
        duration: 500,
        top: '-35%',
        easing: 'spring',
      })
      .add({
        targets: '#cap',
        duration: 300,
        opacity: 1,
        scaleY: '100%',
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '#tubule',
        duration: 100,
        opacity: 1,
        easing: 'easeInOutQuad',
        fill: `#${tubule}`,
      })
      .add({
        targets: '#shakeText',
        duration: 300,
        opacity: 1,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '#shakeButton',
        duration: 300,
        opacity: 1,
        easing: 'easeInOutQuad',
      });
  });
  </script>
  
  <style scoped>
  .shake {
    position: relative;
    left: -50%;
    top: -50%;
    transition: left 1s, top 1s;
  }
  </style>
  