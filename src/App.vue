<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>

  <section>
    <Navbar/>
  </section>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
