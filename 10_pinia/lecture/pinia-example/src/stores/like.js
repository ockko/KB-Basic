import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLikeStore = defineStore('like', () => {
  const like = ref(0);

  const multiple = computed(() => {
    like.value * 5;
  });

  const increase = () => {
    like.value++;
  };

  return { like, multiple, increase };
});
