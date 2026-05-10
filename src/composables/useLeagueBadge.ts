import { useMutation } from '@pinia/colada';
import { ref } from 'vue';

import { fetchLeagueBadge, type LeagueSeasonBadge } from '@/api/badges';
import type { LeagueId } from '@/api/leagues';

export const useLeagueBadge = (leagueId: LeagueId) => {
  const srwFetchLeagueBadge = () => fetchLeagueBadge(leagueId);
  const cache = ref<LeagueSeasonBadge | null>(null);

  const {
    mutateAsync: trigger,
    data,
    error,
    isLoading,
  } = useMutation({
    key: [`${leagueId}-badge`],
    mutation: srwFetchLeagueBadge,
    // {
    //   revalidate: false,
    //   populateCache: true,
    // }
  });

  const invalidateCache = () => {
    cache.value = null;
  };

  const triggerFetchBadge = async () => {
    if (cache.value || isLoading.value) {
      return;
    }

    const badge = await trigger();

    cache.value = badge;
    setTimeout(invalidateCache, 1000 * 60); // 1 minute
  };

  return {
    triggerFetchBadge,
    data,
    error,
    isMutating: isLoading,
  };
};
