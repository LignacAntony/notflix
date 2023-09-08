<template>
  <div class="min-w-[100%]">
    <div class="flex justify-between mr-6">
      <div
        class="flex items-center font-semibold text-white text-2xl cursor-pointer"
      ></div>
    </div>
    <Carousel
      ref="carousel"
      :breakpoints="breakpoints"
      :items-to-scroll="1"
      :wrap-around="isWrapAround"
      :transition="500"
      class="bg-transparent"
    >
      <Slide
        v-for="(movie, index) in movies"
        :key="movie.id"
        class="flex items-center object-cover text-white bg-transparent"
        @mouseover="hover = index"
        @mouseleave="hover = -1"
      >
        <div
          class="object-cover w-[100%] h-[100%] hover:brightness-125 cursor-pointer"
        >
          <div
            class="absolute w-[100%] h-[100%] flex bg-gradient-to-b from-black to-30%"
            v-show="hover === index"
            @click="useMovie.setFavoritesMovies(movie)"
          >
            <span class="flex-1 text-left mt-1 ml-1">{{
              movie.original_title
            }}</span>
            <Heart
              :size="20"
              class="cursor-pointer flex-0 mt-1 mr-1"
              v-if="
                useMovie.getFavoritesMovies.some((fav) => fav.id === movie.id)
              "
            />
            <HeartOutline
              :size="20"
              class="cursor-pointer flex-0 mt-1 mr-1"
              v-else
            />
          </div>
          <img
            style="user-select: none"
            class="pointer-events-none w-[100%] h-[100%] z-[-1]"
            :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, PropType } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import { useMovieStore, Movie } from "../stores/movies";

const useMovie = useMovieStore();
const props = defineProps({
  category: String,
  movies: Array as PropType<Movie[]>,
  isWrapAround: Boolean,
});
const { movies } = toRefs(props);
const hover = ref(-1);
const breakpoints = {
  700: {
    itemsToShow: 4,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 8,
    snapAlign: "start",
  },
};
</script>
<style>
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
  color: white;
}
</style>
