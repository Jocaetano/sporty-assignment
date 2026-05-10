<template>
  <form @submit.prevent="handleSubmit" class="relative w-full sm:max-w-sm">
    <div
      class="flex h-12 w-full rounded-lg border border-border bg-input pl-4 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
    >
      <input
        name="searchInput"
        placeholder="Search leagues..."
        type="search"
        :defaultValue="query"
        class="text-foreground placeholder:text-muted-foreground pr-10 w-full"
      />

      <button type="submit" class="flex items-center pl-3" :tabIndex="-1">
        <Icon
          icon="radix-icons:magnifying-glass"
          class="h-5 w-5 text-muted-foreground cursor-pointer"
        />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { useSearch } from '@/composables/useSearch';

const query = useSearch();

const handleSubmit = (event: SubmitEvent) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const searchTerm = formData.get('searchInput') as string | null;

  query.value = searchTerm ?? '';
};
</script>
