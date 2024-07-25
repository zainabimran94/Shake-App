// composables/useShake.js
import { ref } from 'vue';

const creamOptions = ref([
  ["vanilla", "FFF4E8"],
  ["chocolate", "754820"],
]);

const milkOptions = ref([
  ["chocolate", "C28858"],
  ["vanilla", "F9F1AD"],
  ["banana", "FAEB65"],
  ["strawberry", "EC9FBF"],
  ["mint", "00A36C"],
  ["pumpkin", "F48B19"],
  ["cherry", "BE2666"],
  ["blackberry", "7B26BE"],
]);

const syrupOptions = ref([
  ["chocolate", "754820"],
  ["vanilla", "FDBF76"],
  ["banana", "D3C542"],
  ["strawberry", "F28AAF"],
  ["mint", "088158"],
  ["pumpkin", "C56F11"],
  ["cherry", "A51451"],
  ["blackberry", "6510A8"],
]);

const tubuleOptions = ref([
  ["blue", "0773BE"],
  ["red", "CE461B"],
  ["green", "088158"],
  ["purple", "6510A8"],
  ["pink", "F28AAF"]
]);

const useShake = () => {
  return {
    creamOptions,
    milkOptions,
    syrupOptions,
    tubuleOptions,
  };
};

export { useShake };
