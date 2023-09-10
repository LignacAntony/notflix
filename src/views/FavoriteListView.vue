<template>
  <Transition>
    <div
      class="fixed bg-black z-30 h-screen w-[100%] right-0 top-0 flex items-center justify-center"
      v-show="showLoader"
    >
      <div class="loader"></div>
    </div>
  </Transition>
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
import { onMounted, ref } from "vue";
import BaseVideoCarousel from "@/components/BaseVideoCarousel.vue";
import { useMovieStore } from "../stores/movies";

const showLoader = ref(true);
const useMovie = useMovieStore();
onMounted(async () => {
  await useMovie.addMovies().finally(() => {
    showLoader.value = false;
  });
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.loader {
  width: 100px;
  height: 100px;
  border: 5px solid red;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}
.loader:after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border: 5px solid #fff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes pulse {
  0%,
  60%,
  100% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
}
</style>
