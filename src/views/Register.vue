<template>
  <div class="pt-[15vh]">
    <div class="form-wrapper max-w-[350px] mx-auto">
      <form @submit.prevent class="flex flex-col w-full">
        <h1 class="text-center text-sk-dark-100 text-3xl font-semibold mb-4">
          Create Account
        </h1>
        <input
          type="email"
          placeholder="Email"
          class="h-12 px-2 mb-4 border-2 border-sk-dark-100 rounded-md text-lg outline-sk-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          class="h-12 px-2 mb-5 border-2 border-sk-dark-100 rounded-md text-lg outline-sk-blue-400"
        />
        <button
          class="py-3 px-5 text-white text-lg font-medium bg-sk-dark-100 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
        >
          Create Account
        </button>
      </form>
      <p
        class="text-sk-dark-100 text-center text-sm leading-160 tracking-0.01 mt-3"
      >
        By creating an account you're agreeing to
        <RouterLink to="/" class="text-sk-blue-400">our Terms</RouterLink> &
        <RouterLink to="/" class="text-sk-blue-400">Privacy Policy</RouterLink>
      </p>
      <p
        class="text-sk-dark-100 text-center text-lg leading-160 tracking-0.01 mt-5"
      >
        Already Have an account?
        <RouterLink to="/login" class="text-sk-blue-400">Log in</RouterLink>
      </p>
      
    </div>
  </div>
</template>
