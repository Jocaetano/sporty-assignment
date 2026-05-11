import useSWRV from 'swrv';

import { fetchLeagueLookup, type LeagueId } from '@/api/leagues';

export const useLeagueLookup = (leagueId: LeagueId) => {
  const srwFetchLeagueLookup = () => fetchLeagueLookup(leagueId);

  const { data, error, isLoading } = useSWRV(
    `${leagueId}-lookup`,
    srwFetchLeagueLookup,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
