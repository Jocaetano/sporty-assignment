<template>
  <slot v-if="error" name="fallback">
    <h2>Something went wrong.</h2>
    <button @click="error = null">Try Again</button>
  </slot>

  <slot v-else />
</template>

<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';

const error = ref<Error | null>(null);

onErrorCaptured((err) => {
  error.value = err;
  return false;
});
</script>
