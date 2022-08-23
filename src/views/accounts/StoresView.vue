<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, reactive, computed } from "vue";
import { useSystemStore } from "@/stores/system";
import Navbar2 from "../../components/Navbar2.vue";

const system = useSystemStore();
</script>

<template>
  <div :class="{ dark: system.darkMode }">
    <section
      class="bg-white text-sk-text-dark text-lg min-h-screen dark:bg-ps-gray-700 dark:text-sk-white"
    >
      <Navbar2/>
      <main class="max-w-[1180px] mx-auto px-4">
        <!-- Hero -->
        <div
          class="py-12 flex items-center justify-between border-b dark:border-ps-gray-500"
        >
          <div class="">
            <h1 class="text-4xl leading-10 font-medium mb-1">My Stores</h1>
            <p>Choose a store to view, edit and open it's dashboard.</p>
          </div>
          <div class="mr-5">
            <button
              class="flex items-center py-2 px-5 text-white bg-sk-blue-700 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
                class="mr-1"
              >
                <path
                  d="M12 12L12 6 11 6 11 12 5 12 5 13 11 13 11 19 12 19 12 13 18 13 18 12z"
                ></path>
              </svg>
              <span>Create New Store</span>
            </button>
          </div>
        </div>
        <div class="">
          <div class="py-8 flex items-center justify-between">
            <span>All Stores</span>
            <div class="flex items-center">
              <button
                class="bx-shadow bg-sk-white dark:bg-ps-gray-400 mr-2 flex items-center justify-center h-9 px-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path
                    d="M5,6 L5,7 L18,7 L18,6 L5,6 Z M19,6 L19,8 L4,8 L4,6 C4,5.44771525 4.44771525,5 5,5 L18,5 C18.5522847,5 19,5.44771525 19,6 Z M5,10 L5,11 L18,11 L18,10 L5,10 Z M19,9 L19,12 L4,12 L4,9 L19,9 Z M5,14 L5,15 L18,15 L18,14 L5,14 Z M19,13 L19,16 L4,16 L4,13 L19,13 Z M5,18 L5,19 L18,19 L18,18 L5,18 Z M19,17 L19,19 C19,19.5522847 18.5522847,20 18,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,17 L19,17 Z"
                  ></path>
                </svg>
              </button>
              <button
                class="bx-shadow bg-sk-white dark:bg-ps-gray-400 flex items-center justify-center h-9 px-2 rounded-md transition-all duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path
                    d="M13,11 L18,11 L18,6 L13,6 L13,11 Z M19,6 L19,12 L12,12 L12,5 L18,5 C18.5522847,5 19,5.44771525 19,6 Z M13,19 L18,19 L18,14 L13,14 L13,19 Z M19,13 L19,19 C19,19.5522847 18.5522847,20 18,20 L12,20 L12,13 L19,13 Z M5,11 L10,11 L10,6 L5,6 L5,11 Z M11,5 L11,12 L4,12 L4,6 C4,5.44771525 4.44771525,5 5,5 L11,5 Z M5,19 L10,19 L10,14 L5,14 L5,19 Z M11,13 L11,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,13 L11,13 Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-row flex-wrap">
            <div
              class="h-[270px] w-[310px] mr-9 bg-sk-white dark:bg-ps-gray-800 shadow-2xl flex flex-col rounded overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div class="img-wrapper h-48">
                <img
                  src="/assets/images/store1.jpg"
                  alt=""
                  class="h-full w-full"
                />
              </div>
              <div class="flex flex-col grow justify-center items-start px-6">
                <div class="">
                  <p class="text-xl font-medium">Store Falana</p>
                  <p class="text-sm">Jan 27, 2022</p>
                </div>
              </div>
            </div>
            <div
              class="h-[270px] w-[310px] px-2 bg-sk-white dark:bg-ps-gray-800 shadow-2xl text-center rounded overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col items-center justify-center"
            >
              <div
                class="flex items-center justify-center mb-4 text-sk-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="34"
                  height="34"
                  fill="currentColor"
                >
                  <path
                    d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"
                  />
                </svg>
              </div>
              <p class="text-xl text-sk-blue-700 mb-1">UPGRADE YOUR ACCOUNT</p>
              <p class="px-4">Upgrade your account to unlock more features.</p>
              <button
                class="mt-5 py-2 px-5 text-white bg-sk-blue-700 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <span>Upgrade Now</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<style scoped>
.bx-shadow {
  box-shadow: 0 1px 5px 0 rgba(41, 85, 115, 0.21);
}
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 5px solid red;
}
</style>
