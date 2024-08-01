// composables/useCart.js

import { ref } from 'vue'


export default function useCart() {
  const cart = ref([])

  
  const addItemToCart = (item) => {
    cart.value.push(item)
    alert(`Item ${item.name} added to cart`)
  }


  const removeItemFromCart = (itemId) => {
    const itemIndex = cart.value.findIndex(item => item.id === itemId)
    if (itemIndex !== -1) {
      const removedItem = cart.value.splice(itemIndex, 1)[0]
     
      alert(`Item ${removedItem.name} removed from cart`)
    }
  }

  const getCartItems = () => {
    return cart.value
  }

  const getCartItemCount = () => {
    return cart.value.length
  }

  return {
    addItemToCart,
    removeItemFromCart,
    getCartItems,
    getCartItemCount
  }
}

