<template>
  <div class="fixed bg-black z-20 h-screen w-[100%] right-0 top-0" />
  <div id="HomeView" class="absolute z-20 h-screen w-[100%] right-0 top-0">
    <BaseMovieDetails v-if="movieDescription" :movie="movieDescription" />
    <div class="ml-5">
      <h1 class="text-4xl text-red-500 my-5">Suggestions for you</h1>
      <ul class="flex">
        <li v-for="(movie, index) in myMovie" :key="index">
          <img
            :src="`/images/${movie.image}`"
            @click="setDecription(movie)"
            class="w-[200px] h-[100%] m-1"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref, computed } from 'vue'
import myMovies from '../movies.json'
import BaseMovieDetails from '@/components/BaseMovieDetails.vue'

import { useMovieStore } from '../stores/movies'
import { storeToRefs } from 'pinia'
const useMovie = useMovieStore()
const { myMovie } = storeToRefs(useMovie)

const movieDescription = ref()
const backgroundImage = ref('')

onBeforeMount(() => {
  setDecription(myMovies[0][0])
})

onMounted(async () => {
  setTimeout(() => (myMovie.value = myMovies[0]), 100)
})

const backgroundStyle = computed(() => {
  return {
    'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/${movieDescription.value.image})`,
    'background-position': 'center',
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
  }
})

const setDecription = (movie) => {
  movieDescription.value = movie
  backgroundImage.value = movie.image
}
</script>
