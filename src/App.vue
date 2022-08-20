<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>

  <section>
    <Navbar/>
  </section>

  <RouterView />
</template>

<style scoped></style>
