<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quién es este Pokémon?</h1>
    <div class="h-20">
      <button v-if="gameStatus != GameStatus.Playing" @click="getNextRound()" class="mb-4">Jugar de nuevo?</button>
    </div>
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus != GameStatus.Playing"
    />
    <PokemonOptions 
      :block-selection="gameStatus != GameStatus.Playing"
      :options="options" 
      :correct-answer="randomPokemon.id"
      @selected-option="onSelectedOption" 
    />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { gameStatus, isLoading, randomPokemon, pokemonOptions:options, checkAnswer, getNextRound } = usePokemonGame();

const onSelectedOption = (value: number) => {
  checkAnswer(value);
}

</script>
<style scoped>
button {
  @apply bg-green-600 text-white shadow-md rounded-lg p-1 m-1 cursor-pointer w-40 text-center transition-all hover:bg-green-500;
}
</style>