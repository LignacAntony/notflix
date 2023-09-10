<template>
  <div class="grid place-items-center" v-show="selectedTitle === title">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";

defineProps({ title: String });

const selectedTitle = inject("selectedTitle");
</script>
