<template>
  <div class="static top-0 h-screen">
    <div class="bg-green-600 h-full w-[220px]">
      <div class="">
        <div
          class="flex flex-col items-center max-w-[220px] px-7 py-6 mb-2 border-b dark:border-ps-gray-500"
        >
          <div
            class="bg-red-500 flex items-center justify-center h-12 w-12 rounded-[50%] text-sk-white text-2xl font-bold mr-2"
          >
            Y
          </div>
          <div class="">Yaasir Falana</div>
          <div class="">yope4ever@gmail.com</div>
        </div>
        <div class="h-full">
            <ul class="px-6 flex flex-col text-base">
                  <RouterLink to="/account/account-settings">
                    <li
                    class="py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
                  >
                    Account Setting
                  </li>
                  </RouterLink>
                  
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
</template>
