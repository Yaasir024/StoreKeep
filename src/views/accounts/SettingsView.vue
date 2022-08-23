<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { useSystemStore } from "@/stores/system";
import Navbar2 from "../../components/Navbar2.vue";

const system = useSystemStore();
</script>


<template>
<section class="bg-white text-sk-text-dark text-lg min-h-screen dark:bg-ps-gray-700 dark:text-sk-white">
    <Navbar2 />
    AAAAAA
</section>
    
</template>