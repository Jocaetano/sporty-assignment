import { ref } from 'vue';

const filter = ref<string | null>(null);

export const useFilter = () => {
  return filter;
};
