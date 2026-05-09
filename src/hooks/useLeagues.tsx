'use client';

import useSWR from 'swr';

import { fetchAllLeagues, leaguesEndpoint } from '@/api/leagues';

export const useLeagues = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    leaguesEndpoint,
    fetchAllLeagues,
    {
      suspense: true,
      focusThrottleInterval: 60 * 1000, // 1 minute
    }
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
  };
};
