<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8">
          <h1
            class="text-balance text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Explore Leagues
          </h1>
          <p class="mt-2 text-muted-foreground">
            Discover sports leagues from around the world
          </p>
        </div>

        <ErrorBoundary>
          <template v-slot:fallback>
            <div
              class="rounded-xl bg-card p-6 text-center text-muted-foreground"
            >
              Something went wrong. Please try again.
            </div>
          </template>

          <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <SearchInput />
            <SportFilter />
          </div>

          <Suspense>
            <template v-slot:fallback>
              <LeaguesSkeleton />
            </template>

            <SportLeagues />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ErrorBoundary from '@/components/ErrorBoundary.vue';
import LeaguesSkeleton from '@/components/Leagues/LeaguesSkeleton.vue';
import SportLeagues from '@/components/Leagues/SportLeagues.vue';
import SearchInput from '@/components/Search/SearchInput.vue';
import SportFilter from '@/components/SportFilter/SportFilter.vue';
import Header from '@/components/SportyHeader.vue';
</script>
