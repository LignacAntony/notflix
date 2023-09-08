<template>
  <div class="min-h-[60%]" :style="backgroundStyle">
    <div v-if="movie" class="z-40 text-white w-[50%] pt-20 ml-5">
      <div class="text-[75px] font-semibold font-serif">{{ movie.name }}</div>
      <div class="flex items-center text-2xl pt-4">
        <div>{{ movie.year }}</div>
        <div class="relative">
          <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
          <span class="pl-4">{{ movie.genre.one }}</span>
        </div>
        <div class="relative">
          <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
          <span class="pl-4">{{ movie.genre.two }}</span>
        </div>
        <div class="relative">
          <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
          <span class="pl-4">{{ movie.genre.three }}</span>
        </div>
      </div>
      <div class="text-2xl pt-6">{{ movie.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const movie = defineProps<Movie>()
import { toRefs, computed } from 'vue'
const props = defineProps({ movie: Object })
const { movie } = toRefs(props)
const backgroundStyle = computed(() => {
  return {
    'background-image': `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 10%, rgba(255, 255, 255, 0)), url(/images/${movie.value.banner})`,
    'background-position': 'center',
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
  }
})
</script>
