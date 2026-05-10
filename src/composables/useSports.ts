import { useQuery } from '@pinia/colada';

import { fetchAllSports, sportsEndpoint } from '@/api/sports';

export const useSports = () => {
  const { data } = useQuery({
    key: [sportsEndpoint],
    query: fetchAllSports,
    // {
    //   refreshInterval: 60 * 60 * 1000, // 1 hour
    //   focusThrottleInterval: 10 * 60 * 1000, // 10 minutes
    //   suspense: true,
    // }
  });

  return {
    data,
  };
};
