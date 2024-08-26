// composables/useUser.js
import { ref, onMounted } from 'vue';

export function useUser() {
  const userId = ref(null);

  onMounted(() => {
    if (import.meta.client) {
      let storedUserId = localStorage.getItem('userId');
      if (!storedUserId) {
        // Generate a new userId (you can use any unique generation method, e.g., UUID)
        storedUserId = Math.random().toString(36).slice(2, 9);
        localStorage.setItem('userId', storedUserId);
      }
      userId.value = storedUserId;
    }
  });

  return {userId} ;
}
