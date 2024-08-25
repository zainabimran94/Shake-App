
import { ref } from 'vue'

export function useCart() {
  const cart = ref([])
   
 const addCart= async (item) => {
    try{
      const data = await $fetch('/api/cart/add',{
       method: 'POST',
       body: { itemId: item.id, quantity: 1, userId: 2 },
      });
    cart.value = data || [] 
    } catch (e) {
      console.error(e)
    }
  };

  const updateCart = async (itemId, quantity) => {
    try {
       await $fetch(`/api/cart/update`, {
        method: 'PATCH',
        body: { itemId, quantity, userId: 2 },
        headers: { 'Content-Type': 'application/json' },
      });
      await refreshNuxtData ();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCart = async (itemId, userId) => {
    try {
       await $fetch('/api/cart/delete', {
        method: 'DELETE',
        body: {  itemId, userId: 2 },
      }); 
      await refreshNuxtData ();
      cart.value = cart.value.filter(item => !(item.itemId === itemId && item.userId === userId));
      } catch (e) {
      console.error(e);
    }
  }
  

 return {
    cart,
    addCart,
    updateCart,
    deleteCart
  };
};
