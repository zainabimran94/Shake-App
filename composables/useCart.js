import {useUser} from './useUser'
import { ref } from 'vue'

export function useCart() {
  const cart = ref([])
  const { userId } = useUser();
 
  const getCart = async () => {
    try{
      const data= await $fetch('/api/user/get',{
        method: 'GET',
        params: {userId: userId.value},
      });
      cart.value = data || []
    } catch (e) {
      console.error(e)
    }
  }

 const addCart= async (item) => {
    try{
      const data = await $fetch('/api/cart/add',{
       method: 'POST',
       body: { itemId: item.id, quantity: 1, userId: userId.value },
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
        body: { itemId, quantity, userId: userId.value },
        headers: { 'Content-Type': 'application/json' },
      });
      await getCart();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCart = async (itemId) => {
    try {
       await $fetch('/api/cart/delete', {
        method: 'DELETE',
        body: {  itemId, userId: userId.value },
      }); 
      await getCart ();
      cart.value = cart.value.filter(item => !(item.itemId === itemId && item.userId === userId));
      } catch (e) {
      console.error(e);
    }
  }
  

 return {
    cart,
    getCart,
    addCart,
    updateCart,
    deleteCart
  };
};
