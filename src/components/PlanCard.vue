<script setup>
import { ref, reactive } from "vue";

const props = defineProps(["plan"]);
</script>

<template>
  <div class="card relative text-center border-2 border-sk-gray-200 pt-5 pb-40 px-10 text-sk-dark-100">
    <p class="text-sk-dark-100 text-lg font-medium">{{ plan.title }}</p>
    <div class="text-sk-dark-100 text-25px mt-6">{{ plan.price }}</div>
    <div class="text-sk-gray-100 text-lg mt-2 mb-8 max-w-205px mx-auto">
      {{ plan.billingCondition }}
    </div>
    <ul class="list text-left list-none">
      <li
        class="flex items-center mb-2"
        v-for="(feature, index) in plan.feature"
        :key="index"
      >
        <svg
          class="text-sk-gray-100 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path
            d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
          />
        </svg>
        <span class="text-sk-gray-100 text-lg font-medium">
          {{ feature }}
        </span>
      </li>
    </ul>

    <RouterLink to="/register" class="absolute bottom-7 inset-x-8">
        <div class="btn  py-3 px-6 border-2 border-sk-blue-200 text-lg font-bold rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1">Get Started</div>
    </RouterLink>
    
  </div>
</template>
