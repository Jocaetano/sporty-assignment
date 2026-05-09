'use client';

import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { fetchLeagueBadge, type LeagueSeasonBadge } from '@/api/badges';
import type { LeagueId } from '@/api/leagues';

export const useLeagueBadge = (leagueId: LeagueId) => {
  const srwFetchLeagueBadge = () => fetchLeagueBadge(leagueId);
  const [cache, setCache] = useState<LeagueSeasonBadge | null>(null);

  const { trigger, data, error, isMutating } = useSWRMutation(
    `${leagueId}-badge`,
    srwFetchLeagueBadge,
    {
      revalidate: false,
      populateCache: true,
    }
  );

  const invalidateCache = () => {
    setCache(null);
  };

  const triggerFetchBadge = async () => {
    if (cache || isMutating) {
      return;
    }

    const badge = await trigger();

    setCache(badge);
    setTimeout(invalidateCache, 1000 * 60); // 1 minute
  };

  return {
    triggerFetchBadge,
    data,
    error,
    isMutating,
  };
};
