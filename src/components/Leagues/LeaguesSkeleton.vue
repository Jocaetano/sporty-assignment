<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <LeagueCardSkeleton v-for="i in 6" :key="i" />
  </div>
</template>

<script setup lang="ts">
import LeagueCardSkeleton from './LeagueCardSkeleton.vue';
</script>
