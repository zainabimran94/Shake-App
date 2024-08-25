<script setup>

const { modelValue, options, placeholder,label } = defineProps({
  modelValue: String,
  options: Array,
  
  label: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);

function updateValue(value) {
  emit('update:modelValue', value);
}
</script>

<template>

  <select 
      :value="modelValue"
      @input="updateValue($event.target.value)"
      class="select-menu__dropdown"
    >
    
   <option v-for="option in options" 
   :key="option.value" 
   :value="option.value">
      {{ option.label }}
      
    </option>
  </select>

</template>

<style>
.select-menu {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}



.select-menu__dropdown {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 100%;
}
</style>