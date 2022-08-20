<script setup>
import { ref, reactive } from "vue";
import Btn from "./Btn.vue";

const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value;
};
const closeNavOnRoute = () => {
  showNav.value = false;
};
</script>

<template>
  <nav
    class="p-4 lg:px-140px lg:py-15px md:px-35px transition-all ease-in-out duration-700 border-b-2 md:border-none"
  >
    <div class="flex items-center justify-between">
      <div class="logo">STOREKEEP</div>
      <div class="links hidden md:flex">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/plans" class="ml-8">Plans</RouterLink>
        <RouterLink to="/faqs" class="ml-8">FAQs</RouterLink>
        <RouterLink to="/about" class="ml-8">About</RouterLink>
      </div>
      <div class="flex items-center">
        <RouterLink to="/login" class="mr-8 hidden md:block">Log In</RouterLink>
        <RouterLink to="/register">
          <Btn> Sign Up </Btn>
        </RouterLink>
        <button class="ml-8 block md:hidden" @click="toggleNav">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
            <path
              fill="currentColor"
              d="M2 3h20v3H2zM2 11h20v3H2zM2 19h20v3H2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Nav -->
  <transition name="nav">
    <template v-if="showNav">
      <nav
        class="mobile-nav px-11 py-10 bg-white fixed top-0 right-0 w-full h-screen z-10"
      >
        <button class="fixed top-10 right-10 cursor-pointer z-20" @click="toggleNav">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="currentColor" d="M4 18L18 4l2 2L6 20z"></path>
            <path fill="currentColor" d="M6 4l14 14-2 2L4 6z"></path>
          </svg>
        </button>
        <div class="flex flex-col">
          <div class="logo mb-7">STOREKEEP</div>
          <RouterLink to="/" class="mb-7" @click="closeNavOnRoute"
            >Home</RouterLink
          >
          <RouterLink to="/plans" class="mb-7" @click="closeNavOnRoute"
            >Plans</RouterLink
          >
          <RouterLink to="/faqs" class="mb-7" @click="closeNavOnRoute"
            >FAQs</RouterLink
          >
          <RouterLink to="/about" class="mb-7" @click="closeNavOnRoute"
            >About</RouterLink
          >
          <RouterLink to="/login" class="mb-7" @click="closeNavOnRoute"
            >Log In</RouterLink
          >
        </div>
      </nav>
    </template>
  </transition>
</template>

<style scoped>
nav a {
  font-size: 20px;
  font-weight: 400;
}
nav .links a.router-link-exact-active {
  position: relative;
}

nav .links a.inact.router-link-exact-active::before {
  display: none;
}
nav .links a.router-link-exact-active::before {
  content: "";
  position: absolute;
  top: -2px;
  background: black;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  right: -4px;
}

/* Nav Animation */
.nav-enter-active,
.nav-leave-active {
  transition: 0.5s ease all;
}
.nav-enter-from,
.nav-leave-to {
  transform: translateX(770px);
}

.over {
  left: 50%;
  transform: translate(-50%);
}

.show {
  display: block;
}

.hide {
  display: none;
}
</style>
