<script setup>
import { ref, reactive, computed } from "vue";
import { useSystemStore } from "@/stores/system";
import { useClickOutside } from "@/composables/useClickOutside";

const system = useSystemStore();

const accountNav = ref(false)
const toggleAccountNav = () => {
    accountNav.value = !accountNav.value
}

const accountsMenu = ref(null)
useClickOutside(accountsMenu, () => {
  accountNav.value = false;
});
</script>

<template>
  <!-- Header -->
  <nav
    class="bx-shadow h-12 flex items-center justify-between dark:bg-ps-gray-800"
  >
    <div class="left ml-5 flex items-center">
      <RouterLink to="/">
        <div
          class="logo mr-2 text-sk-blue-600 text-lg font-medium cursor-pointer"
        >
          STOREKEEP
        </div>
      </RouterLink>

      <div class="">
        <div class="relative flex items-center p-3 pr-2 cursor-pointer">
          <span>My Stores</span>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path
              d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"
            ></path>
          </svg>
        </div>
        <div class="hidden absolute top-[110%] left-0 z-50">
          <div
            class="relative w-[450px] bg-sk-white dark:bg-ps-gray-800 shadow-2xl rounded-xl"
          >
            <div class="flex flex-col">
              <div class="flex items-center justify-between px-6 py-4 mb-2">
                <div class="">Recent Stores</div>
                <div class="flex items-center text-sk-blue-700 cursor-pointer">
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
                </div>
              </div>
              <div
                class="h-16 border-b dark:border-ps-gray-500 px-6 flex items-center justify-between"
              >
                <div class="flex items-center">
                  <img
                    src="/assets/images/store1.jpg"
                    alt=""
                    class="h-9 w-16 mr-2"
                  />
                  <p class="">Store Falana</p>
                </div>
                <div class="flex items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path
                      d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                    />
                  </svg>
                </div>
              </div>
              <div class="h-16 flex items-center justify-center">
                <p class="text-sk-blue-700 cursor-pointer">Go to all Stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="flex items-center p-3 pr-2 cursor-pointer">
          <span>Help</span>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path
              d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"
            ></path>
          </svg>
        </div>
        <div class="absolute top-[110%] left-[-150px] z-50">
          <div
            class="relative w-[450px] bg-sk-white dark:bg-ps-gray-800 shadow-2xl rounded-xl"
          >
            <div class="h-[450px] w-full">
              <div
                class="flex items-center justify-between px-7 py-6 mb-2 border-b dark:border-ps-gray-500"
              >
                <div class="">Help</div>
                <div class="flex items-center text-sk-blue-700 cursor-pointer">
                  <span>Visit Help Guide</span>
                </div>
              </div>
              <div class=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3">
        <span>Upgrade</span>
      </div>
    </div>
    <div class="right mr-5 flex items-center">
      <div class="px-2">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path
            d="M18,5 C19.1045695,5 20,5.8954305 20,7 L20,15 C20,16.1045695 19.1045695,17 18,17 L12,17 L8.62469505,19.700244 C8.19343311,20.0452535 7.56414074,19.9753321 7.21913119,19.5440702 C7.07728075,19.3667572 7,19.1464466 7,18.9193752 L7,17 L6,17 C4.8954305,17 4,16.1045695 4,15 L4,7 C4,5.8954305 4.8954305,5 6,5 L18,5 Z M18,6 L6,6 C5.48716416,6 5.06449284,6.38604019 5.00672773,6.88337887 L5,7 L5,15 C5,15.5128358 5.38604019,15.9355072 5.88337887,15.9932723 L6,16 L8,16 L8,18.9193752 L11.6492189,16 L18,16 C18.5128358,16 18.9355072,15.6139598 18.9932723,15.1166211 L19,15 L19,7 C19,6.48716416 18.6139598,6.06449284 18.1166211,6.00672773 L18,6 Z"
          ></path>
        </svg>
      </div>
      <div class="px-2">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path
            d="M11.5,4 C12.3284271,4 13,4.67157288 13,5.5 L13,6.208 L13.1928659,6.26644975 C15.4021227,6.9794161 17,9.05310592 17,11.5 L17,14.381966 C17,15.0636597 17.5141144,15.4674835 17.7236068,15.5527864 C18.6312256,16.0112457 19,16.8789673 19,17.618034 L19,18 C18.999914,18.5522512 18.5522511,18.9999525 18,19.000086 L13.9499027,19.0004345 L13.9499027,19.0004345 C13.7180997,20.1413382 12.7093254,21 11.5,21 C10.2906746,21 9.28190033,20.1413382 9.05009729,19.0004345 L5,19.000086 C4.44774885,18.9999525 4.00008604,18.5522512 4,18 L4,17.618034 L4,17.618034 C4,16.8017489 4.4304466,16.0508527 5.12384427,15.6363588 C5.70794809,15.3546774 6,14.9365465 6,14.381966 L6,11.5 C6,8.98221115 7.69181046,6.85956581 10.0006454,6.20685 L10,5.5 C10,4.67157288 10.6715729,4 11.5,4 Z M12.9143985,19.000703 L10.0856015,19.000703 C10.2917181,19.5829319 10.8471533,20 11.5,20 C12.1528467,20 12.7082819,19.5829319 12.9143985,19.000703 Z M11.5,5 C11.2238576,5 11,5.22385763 11,5.5 L11.000297,7.02743156 C8.7501788,7.27601865 7,9.18362124 7,11.5 L7,14.381966 C7,15.1982511 6.5695534,15.9491473 5.87615573,16.3636412 L5.7609788,16.4232259 C5.47658468,16.5798721 5,16.9239115 5,17.618034 L5,18 L18,18 L18,17.618034 C18,16.9215546 17.5177307,16.5793152 17.2763932,16.4472136 C16.5953522,16.1302643 16,15.3188477 16,14.381966 L16,11.5 C16,9.18396594 14.2503421,7.2765864 12.0007074,7.02754265 L12,5.5 C12,5.22385763 11.7761424,5 11.5,5 Z"
          ></path>
        </svg>
      </div>
      <span class="h-5 w-[1px] mx-3 bg-sk-gray-100"></span>
      <div class="relative"  ref="accountsMenu">
        <div class="flex items-center cursor-pointer p-4 transition-all duration-300 ease-in-out hover:text-sk-blue-800" @click="toggleAccountNav" >
          <span>Yaasir Falana</span>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path
              d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"
            ></path>
          </svg>
        </div>
        <div class="absolute top-[110%] right-0 z-50" v-if="accountNav">
          <div
            class="relative w-[300px] bg-sk-white dark:bg-ps-gray-800 shadow-2xl rounded-xl"
          >
            <div class="w-full pb-5">
              <div
                class="flex items-center px-7 py-4 mb-2 border-b dark:border-ps-gray-500"
              >
                <div
                  class="bg-red-500 flex items-center justify-center h-12 w-12 rounded-[50%] text-sk-white text-2xl font-bold mr-2"
                >
                  Y
                </div>
                <div class="">Yaasir Falana</div>
              </div>
              <ul class="px-6 flex flex-col text-base">
                <li
                  class="py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
                >
                  Account Setting
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800 border-t dark:border-ps-gray-500"
                >
                  Subscriptions
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
                >
                  Billing History
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800 border-b dark:border-ps-gray-500"
                >
                  Payment Method
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
                >
                  Create New Store
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
                >
                  Help Center
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
                >
                  Themes
                </li>
                <li
                  class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800 border-t dark:border-ps-gray-500"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
