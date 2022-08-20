<script setup>
import { ref, reactive } from "vue";
import PlanCard from '@/components/PlanCard.vue'

const plansDetails = reactive({
  basic: {
    title: "BASIC",
    price: "$12/month",
    billingCondition: "Billed annually or $15 month-to-month",
    feature: [
      "1 Store",
      "1 Invoice Template",
      "2 Collaborators",
      "15 Products",
    ],
  },
  pro: {
    title: "PRO",
    price: "$28/month",
    billingCondition: "Billed annually or $30 month-to-month",
    feature: [
      "3 Store",
      "10 Invoice Template",
      "4 Collaborators",
      "50 Products",
      "Delivery Invoice available",
      "Own Logo",
    ],
  },
  premium: {
    title: "PREMIUM",
    price: "$52/month",
    billingCondition: "Billed annually or $55 month-to-month",
    feature: [
      "6 Store",
      "20+ Invoice Template",
      "10 Collaborators",
      "100 Products",
      "Shift Manager",
      "Invoice Manager",
      "Customizable Theme",
    ],
  },
});
</script>

<template>
  <section class="plans text-center max-w-7xl mx-auto px-4 pb-210px">
    <h1 class="mt-8 text-32px text-sk-dark-100 font-medium tracking-0.01">
      PRICING
    </h1>
    <div class="card-grid max-w-5xl mx-auto mt-20 mb-10 grid grid-cols-3 gap-4 lg:gap-8">
        <PlanCard :plan ="plansDetails.basic" />
        <PlanCard :plan ="plansDetails.pro" />
        <PlanCard :plan ="plansDetails.premium" />
    </div>
    <p class="text-sk-gray-100 text-lg leading-160 tracking-0.01 mt-20 mx-2">
      Have Questions?
      <span class="">
        Check our <RouterLink to="/faqs" class="text-sk-dark-100 font-medium leading-160 tracking-0.01">FAQs Page</RouterLink> for more information.</span
      >
    </p>
  </section>
</template>
