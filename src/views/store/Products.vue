<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { useSystemStore } from "@/stores/system";
import Navbar2 from "../../components/Navbar2.vue";
import Sidebar from "@/components/SidebarDashboard.vue";

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
        <div class="h-full w-full">
          <div class="overflow-y-scroll min-h-screen px-12">
            <div class="py-6">
              <h1 class="text-4xl font-semibold">Products</h1>
              <button
                class="py-1 px-4 text-white bg-sk-blue-700 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <span>Add Product</span>
              </button>
            </div>
            <div class="bg-white shadow-2xl dark:bg-ps-gray-800 h-24 w-full">
              <div class="bg-red-200 px-4 py-6">
                <h2>Basic Information</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
