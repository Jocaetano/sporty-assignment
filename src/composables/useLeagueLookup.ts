import { useQuery } from '@pinia/colada';

import { fetchLeagueLookup, type LeagueId } from '@/api/leagues';

export const useLeagueLookup = (leagueId: LeagueId) => {
  const srwFetchLeagueLookup = () => fetchLeagueLookup(leagueId);

  const { data, error, isLoading } = useQuery({
    key: [`${leagueId}-lookup`],
    query: srwFetchLeagueLookup,
  });

  return {
    data,
    error,
    isLoading,
  };
};
