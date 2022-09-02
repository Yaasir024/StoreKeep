<template>
  <div class="static top-0 h-screen">
    <div
      class="bg-ps-gray-800 text-sk-white h-full w-[220px] border-t dark:border-ps-gray-500"
    >
      <div class="">
        <div class="flex flex-col items-center max-w-[220px] px-7 py-6 mb-2">
          <div class="">Yaasir Store</div>
        </div>
        <div class="h-full">
          <ul class="px-4 flex flex-col text-base">
            <RouterLink to="/account/account-settings">
              <li
                class="py-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
              >
                Home
              </li>
            </RouterLink>

            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800 border-t border-ps-gray-500"
            >
              Products
            </li>
            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
            >
              Orders
            </li>
            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
            >
              Invoice
            </li>
            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
            >
              Shipping
            </li>
            <li
              class="py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800 border-b border-ps-gray-500"
            >
              Overview
            </li>
            <li
              class="flex items-center py-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-sk-blue-800"
            >
              <svg
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <defs></defs>
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                ></path>
              </svg>
              <span class="text-lg"> Settings </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
