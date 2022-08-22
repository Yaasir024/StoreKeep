<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Toggle from "./components/Toggle.vue";
</script>

<template>

  <section class="hidden">
    <Navbar/>
  </section>
  <Toggle/>
  <RouterView />
</template>

<style scoped></style>
