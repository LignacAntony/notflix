<template>
  <div class="min-h-[60%]">
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
      <div class="pt-6">
        <button
          class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4"
        >
          Play movie
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({ movie: Object });
</script>
