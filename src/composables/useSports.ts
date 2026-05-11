import useSWRV from 'swrv';

import { fetchAllSports, sportsEndpoint } from '@/api/sports';

export const useSports = () => {
  const { data } = useSWRV(sportsEndpoint, fetchAllSports, {
    refreshInterval: 60 * 60 * 1000, // 1 hour
    revalidateDebounce: 10 * 60 * 1000, // 10 minutes
  });

  return {
    data,
  };
};
