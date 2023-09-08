<template>
  <header>
    <div
      id="Header"
      class="fixed flex z-40 items-center w-screen h-20 bg-black bg-opacity-50 pl-10"
    >
      <router-link to="/">
        <img class="w-[130px]" src="/images/netflix-logo.png" />
      </router-link>

      <div class="py-2 mx-5 my-6">
        <router-link to="/">
          <span :class="[$route.name === 'home' ? 'text-red-500' : 'text-white']">Home</span>
        </router-link>
      </div>
      <div class="py-2 mx-5 my-6">
        <router-link to="/movies">
          <span :class="[$route.name === 'movies' ? 'text-red-500' : 'text-white']"
            >Movies Listing</span
          >
        </router-link>
      </div>
      <div class="py-2 mx-5 my-6">
        <router-link to="/favorites">
          <span :class="[$route.name === 'favorites' ? 'text-red-500' : 'text-white']"
            >Favorites Listing</span
          >
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style scoped></style>
