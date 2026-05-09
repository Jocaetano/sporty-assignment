'use client';

import useSWRImmutable from 'swr/immutable';

import { fetchLeagueLookup, type LeagueId } from '@/api/leagues';

export const useLeagueLookup = (leagueId: LeagueId) => {
  const srwFetchLeagueLookup = () => fetchLeagueLookup(leagueId);

  const { data, error, isLoading } = useSWRImmutable(
    `${leagueId}-lookup`,
    srwFetchLeagueLookup
  );

  return {
    data,
    error,
    isLoading,
  };
};
