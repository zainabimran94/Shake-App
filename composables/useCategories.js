import { ref } from 'vue';

export default function useCategories() {
  const categories = ref([
    {
      id: 1,
      name: 'Pizza',
      desc: 'Delicious hand-tossed pizza with fresh toppings.',
      slug: 'Pizza',
      image: '/img/pizza.jpg'
    },
    {
      id: 2,
      name: 'Pasta',
      desc: 'Delicious hand-tossed pasta with fresh toppings.',
      slug: 'Pasta',
      image: '/img/pasta.jpg'
    },
    {
      id: 3,
      name: 'Shake',
      desc: 'Yummy ice cold shakes.',
      slug: 'Shake',
      image: '/img/shake.webp'
    },
    {
      id: 4,
      name: 'Sweet',
      desc: 'Delicious sweet with fresh toppings.',
      slug: 'Sweet',
      image: '/img/delight.jpg'
    },
  ]);

  return {
    categories
  };
}
