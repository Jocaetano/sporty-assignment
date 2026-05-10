<template>
  <button
    type="button"
    @click="triggerFetchBadge"
    class="group relative flex min-h-32 flex-col overflow-hidden rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-muted-foreground hover:shadow-lg hover:shadow-black/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
  >
    <div class="flex flex-1 items-start justify-between gap-3">
      <div class="flex-1 space-y-1">
        <h3
          class="text-balance font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors"
        >
          {{ league.strLeague }}
        </h3>
        <LeagueAlternateName
          :lookup="lookup"
          :isError="!!lookupError"
          :isLoading="isLoading"
        />
      </div>

      <Badge
        :badge="badge"
        :alt="`${league.strLeague} ${badge?.strSeason} badge`"
        :badgeError="!!badgeError"
        :badgeLoading="badgeLoading"
      />
    </div>

    <div class="mt-3 flex items-center gap-2">
      <span
        class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
      >
        {{ league.strSport }}
      </span>

      <span
        v-if="!badge && !badgeLoading && !badgeError"
        class="text-xs text-muted-foreground"
      >
        Click to load badge
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { League as LeagueType } from '@/api/leagues';
import { useLeagueBadge } from '@/composables/useLeagueBadge';
import { useLeagueLookup } from '@/composables/useLeagueLookup';

import LeagueAlternateName from './LeagueAlternateName.vue';
import Badge from './LeagueBadge.vue';

type LeagueProps = {
  league: LeagueType;
};

const { league } = defineProps<LeagueProps>();

const {
  data: lookup,
  error: lookupError,
  isLoading,
} = useLeagueLookup(league.idLeague);

const {
  triggerFetchBadge,
  data: badge,
  error: badgeError,
  isMutating: badgeLoading,
} = useLeagueBadge(league.idLeague);
</script>
