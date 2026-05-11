import useSWRV from 'swrv';

import { fetchAllLeagues, leaguesEndpoint } from '@/api/leagues';

export const useLeagues = () => {
  const { data, error, isLoading, isValidating } = useSWRV(
    leaguesEndpoint,
    fetchAllLeagues,
    {
      dedupingInterval: 60 * 1000, // 1 minute
    }
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
  };
};
