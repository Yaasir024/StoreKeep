<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Toggle from "./components/Toggle.vue";
import { useSystemStore } from "@/stores/system";
const system = useSystemStore();
</script>

<template>
  <div :class="{ dark: system.darkMode }">
    <section class="hidden">
      <Navbar />
    </section>
    <Toggle />
    <RouterView />
  </div>
</template>

<style scoped></style>
