// composables/useShake.js
import { ref } from 'vue';

const creamOptions = ref([
  ["Vanilla", "FFF4E8"],
  ["Chocolate", "754820"],
]);

const milkOptions = ref([
  ["Chocolate", "C28858"],
  ["Vanilla", "F9F1AD"],
  ["Banana", "FAEB65"],
  ["Strawberry", "EC9FBF"],
  ["Mint", "00A36C"],
  ["Pumpkin", "F48B19"],
  ["Cherry", "BE2666"],
  ["Blackberry", "7B26BE"],
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
