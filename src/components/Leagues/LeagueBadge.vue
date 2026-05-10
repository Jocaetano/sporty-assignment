<template>
  <div
    v-if="badge && badge.strBadge"
    class="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted"
  >
    <img
      :src="badge.strBadge"
      :alt="alt"
      class="h-full w-full object-contain p-1"
    />
  </div>

  <div
    v-else-if="badgeError || (badge && badge.strBadge == null)"
    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-muted"
  >
    <svg
      class="h-6 w-6 text-muted-foreground"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        :strokeWidth="1.5"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  </div>

  <div
    v-else-if="badgeLoading"
    class="h-14 w-14 shrink-0 animate-pulse rounded-lg bg-muted"
  />

  <div
    v-else
    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
  >
    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        :strokeWidth="1.5"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import type { LeagueSeasonBadge } from '@/api/badges';

type BadgeProps = {
  badge: LeagueSeasonBadge | null | undefined;
  alt: string;
  badgeError: boolean;
  badgeLoading: boolean;
};

defineProps<BadgeProps>();
</script>
