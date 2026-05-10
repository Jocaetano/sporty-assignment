<template>
  <SelectRoot :defaultValue="allOption.label" v-model="syncedModel">
    <SelectTrigger
      class="inline-flex h-12 items-center justify-between gap-2 rounded-lg border border-border bg-input px-4 text-sm text-foreground transition-colors hover:border-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:min-w-45"
      aria-label="Sport Filter"
    >
      <SelectValue placeholder="Select a sport..." />
      <Icon
        icon="radix-icons:chevron-down"
        class="h-4 w-4 text-muted-foreground"
      />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="overflow-hidden rounded-lg border border-border bg-card shadow-xl z-100"
        position="popper"
        :side-offset="5"
      >
        <SelectScrollUpButton
          class="flex h-6 cursor-default items-center justify-center bg-card"
        >
          <Icon
            icon="radix-icons:chevron-up"
            class="h-4 w-4 text-muted-foreground"
          />
        </SelectScrollUpButton>

        <SelectViewport class="p-1">
          <SelectGroup>
            <SelectLabel
              class="px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Sports
            </SelectLabel>
            <SelectOption
              v-for="option in options"
              :key="option.id"
              :value="option.label"
            >
              {{ option.label }}
            </SelectOption>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton
          class="flex h-6 cursor-default items-center justify-center bg-card"
        >
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui';
import { computed } from 'vue';

import { useFilter } from '@/composables/useFilter';
import { useSports } from '@/composables/useSports';

import SelectOption from './SelectOption.vue';

const { data: sports } = useSports();
const filter = useFilter();

const allOption = { id: '_allId', label: 'All Sports' };

const options = computed(() => [
  allOption,
  ...(sports.value ?? []).map((sport) => ({
    id: sport.idSport,
    label: sport.strSport,
  })),
]);

const syncedModel = computed({
  get() {
    return filter.value;
  },
  set(newValue) {
    if (newValue === 'All Sports') {
      filter.value = null;
      return;
    }

    filter.value = newValue;
  },
});
</script>
