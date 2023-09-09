<template>
  <div id="FavoritesList" class="bg-black z-20 h-screen w-[100%] pt-20">
    <div
      class="text-white flex align-middle justify-center mt-[25%]"
      v-if="!useMovie.getFavoritesMovies.length"
    >
      No movies added to favorites
    </div>
    <BaseVideoCarousel
      class="my-4"
      v-else
      :isWrapAround="false"
      :movies="useMovie.getFavoritesMovies"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import BaseVideoCarousel from "@/components/BaseVideoCarousel.vue";
import { useMovieStore } from "../stores/movies";

const useMovie = useMovieStore();
onMounted(async () => {
  await useMovie.addMovies();
});
</script>

<style></style>
