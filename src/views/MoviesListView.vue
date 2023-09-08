<template>
  <div id="MovieList" class="fixed bg-black z-20 h-screen w-[100%] right-0 top-0 pt-20">
    <BaseTabsWrapper class="my-14">
      <BaseTabsItem title="Action"
        ><BaseVideoCarousel class="my-4" :isWrapAround="true" :movies="useMovie.getActionMovies"
      /></BaseTabsItem>
      <BaseTabsItem title="Animation"
        ><BaseVideoCarousel class="my-4" :isWrapAround="true" :movies="useMovie.getAnimationMovies"
      /></BaseTabsItem>
      <BaseTabsItem title="Adventure"
        ><BaseVideoCarousel class="my-4" :isWrapAround="true" :movies="useMovie.getAdventureMovies"
      /></BaseTabsItem>
      <BaseTabsItem title="Comedy"
        ><BaseVideoCarousel class="my-4" :isWrapAround="true" :movies="useMovie.getComedyMovies"
      /></BaseTabsItem>
      <BaseTabsItem title="Documentary"
        ><BaseVideoCarousel
          class="my-4"
          :isWrapAround="true"
          :movies="useMovie.getDocumentaryMovies"
      /></BaseTabsItem>
    </BaseTabsWrapper>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import BaseVideoCarousel from '@/components/BaseVideoCarousel.vue'
import BaseTabsWrapper from '@/components/BaseTabsWrapper.vue'
import BaseTabsItem from '@/components/BaseTabsItem.vue'
import { useMovieStore } from '../stores/movies'

const useMovie = useMovieStore()
onMounted(async () => {
  await useMovie.addMovies()
})
</script>

<style></style>
