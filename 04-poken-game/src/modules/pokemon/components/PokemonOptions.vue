<template>
  <section>
    <ul class="mt-5">
      <li v-for="({ name }, index) in pokemonOptions" :key="index">{{ name }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  pokemonOptions: Pokemon[];
}

const props = defineProps<Props>();
</script>

<style scoped>
li {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
</style>
