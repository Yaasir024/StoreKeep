<script setup>
import Btn from "./Btn.vue";
</script>

<template>
  <nav
    class="p-4 lg:px-140px lg:py-15px md:px-70px transition-all ease-in-out duration-700 border-b-2 md:border-none"
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
        <button class="ml-8 block md:hidden">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M2 3h20v3H2zM2 11h20v3H2zM2 19h20v3H2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav a {
  font-size: 18px;
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
