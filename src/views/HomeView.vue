<template>
  <div
    class="fixed bg-black z-20 h-screen w-[100%] right-0 top-0"
    :style="backgroundStyle"
  />
  <div id="HomeView" class="absolute z-20 h-screen w-[100%] right-0 top-0">
    <BaseMovieDetails v-if="movieDescription" :movie="movieDescription" />
    <div class="ml-5">
      <h1 class="text-4xl text-red-500 my-5">Suggestions for you</h1>
      <ul class="flex">
        <li v-for="(movie, index) in myMovies" :key="index">
          <img
            :src="`/images/${movie.image}`"
            @click="setDecription(movie)"
            class="cursor-pointer w-[200px] h-[100%] mx-5 shadow-[0_5px_60px_-20px_rgba(255,255,255,0.3)]"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, computed } from "vue";
import BaseMovieDetails from "@/components/BaseMovieDetails.vue";

import { useMovieStore } from "../stores/movies";
import { storeToRefs } from "pinia";
const useMovie = useMovieStore();
const { myMovies } = storeToRefs(useMovie);

const movieDescription = ref();
const backgroundImage = ref("");

onBeforeMount(() => {
  useMovie.addMyMovies();
  setDecription(myMovies.value[0]);
});

const backgroundStyle = computed(() => {
  return {
    "background-image": `linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0)), url(/images/${movieDescription.value.banner})`,
    "background-position": "center",
    "background-size": "cover",
    "background-repeat": "no-repeat",
  };
});

const setDecription = (movie) => {
  movieDescription.value = movie;
  backgroundImage.value = movie.image;
};
</script>
