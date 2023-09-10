<template>
  <div>
    <ul class="flex justify-between gap-1 p-0 m-0">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="list-none flex-1 py-5 ease-in duration-300 cursor-pointer select-none text-center"
        :class="[
          selectedTitle === title
            ? 'text-red-500 border-b-2 border-b-red-500'
            : 'text-white border-b-2 border-b-white',
        ]"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useSlots, ref, provide } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>
