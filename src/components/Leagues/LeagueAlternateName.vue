<template>
  <div v-if="isLoading" class="h-4 w-24 animate-pulse rounded bg-muted" />

  <p v-else-if="isError || !lookup" class="text-sm text-muted-foreground">
    Unable to load details
  </p>

  <template v-else-if="!lookup.strLeagueAlternate" />

  <p v-else class="text-sm text-muted-foreground">
    {{ lookup.strLeagueAlternate }}
  </p>
</template>

<script setup lang="ts">
import type { LeagueLookup } from '@/api/leagues';

type LeagueAlternateProps = {
  lookup: LeagueLookup | null | undefined;
  isLoading: boolean;
  isError: boolean;
};

defineProps<LeagueAlternateProps>();
</script>
