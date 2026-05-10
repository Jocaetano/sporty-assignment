import { useQuery } from '@pinia/colada';
import { computed } from 'vue';

import { fetchAllLeagues, leaguesEndpoint } from '@/api/leagues';

export const useLeagues = () => {
  const { data, error, isLoading, isPending } = useQuery({
    key: [leaguesEndpoint],
    query: fetchAllLeagues,

    // options:{
    //   suspense: true,
    //   focusThrottleInterval: 60 * 1000, // 1 minute
    // }
  });

  const isValidating = computed(() => !isPending.value && isLoading.value);

  return {
    data,
    error,
    isLoading,
    isValidating,
  };
};
