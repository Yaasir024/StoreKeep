<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { useSystemStore } from "@/stores/system";
import Navbar2 from "../../components/Navbar2.vue";
import Sidebar from "@/components/SidebarAccounts.vue";

const system = useSystemStore();
</script>

<template>
  <section
    class="bg-white text-sk-text-dark text-lg dark:bg-ps-gray-700 dark:text-sk-white h-screen overflow-hidden"
  >
    <Navbar2 />
    <div class="h-full overflow-hidden">
      <div class="h-full flex">
        <Sidebar />
        <div class="bg-red-700 h-full w-full">Amamiya Jn</div>
      </div>
    </div>
  </section>
</template>
