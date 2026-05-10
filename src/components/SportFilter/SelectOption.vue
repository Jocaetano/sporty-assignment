<template>
  <SelectItem
    class="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 pl-8 text-sm text-foreground outline-none transition-colors data-highlighted:bg-accent data-highlighted:text-accent-foreground"
    :value
  >
    <SelectItemIndicator class="absolute left-2 inline-flex items-center">
      <Icon icon="radix-icons:check" class="h-4 w-4 text-primary" />
    </SelectItemIndicator>
    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { SelectItem, SelectItemIndicator, SelectItemText } from 'reka-ui';

defineProps<{
  value: string;
}>();
</script>
