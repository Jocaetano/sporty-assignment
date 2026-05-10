<template>
  <div v-if="isLoading" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <LeagueCardSkeleton v-for="i in 6" :key="i" />
  </div>

  <EmptyLeagues v-else-if="filteredLeagues.length === 0" />

  <div v-else class="relative">
    <div v-if="isValidating" class="absolute -top-6 right-0">
      <div class="flex items-center gap-2 text-xs text-muted-foreground">
        <div class="h-2 w-2 animate-pulse rounded-full bg-primary" />
        Updating...
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Suspense v-for="league in filteredLeagues" :key="league.idLeague">
        <template v-slot:fallback>
          <LeagueCardSkeleton />
        </template>

        <League :league="league" />
      </Suspense>
    </div>

    <p class="mt-6 text-center text-sm text-muted-foreground">
      Showing {{ filteredLeagues.length }}{{ ' ' }}
      {{ filteredLeagues.length === 1 ? 'league' : 'leagues' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useFilter } from '@/composables/useFilter';
import { useLeagues } from '@/composables/useLeagues';
import { useSearch } from '@/composables/useSearch';

import EmptyLeagues from './EmptyLeagues.vue';
import League from './LeagueCard.vue';
import LeagueCardSkeleton from './LeagueCardSkeleton.vue';

const filter = useFilter();

const query = useSearch();
const { data, isLoading, isValidating } = useLeagues();

const filteredLeagues = computed(() => {
  const leagues = data.value ?? [];

  return leagues
    .filter((league) =>
      league.strLeague
        .toLocaleLowerCase()
        .includes(query.value.toLocaleLowerCase())
    )
    .filter(
      (league) =>
        filter.value == null ||
        league.strSport.toLocaleLowerCase() === filter.value.toLocaleLowerCase()
    );
});
</script>
>
