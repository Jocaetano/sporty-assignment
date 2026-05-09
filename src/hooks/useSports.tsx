'use client';

import useSWR from 'swr';

import { fetchAllSports, sportsEndpoint } from '@/api/sports';

export const useSports = () => {
  const { data } = useSWR(sportsEndpoint, fetchAllSports, {
    refreshInterval: 60 * 60 * 1000, // 1 hour
    focusThrottleInterval: 10 * 60 * 1000, // 10 minutes
    suspense: true,
  });

  return {
    data,
  };
};
