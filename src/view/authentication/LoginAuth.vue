<template>
    <NavbarComponent/>
    <div class="flex justify-center h-screen px-4 pt-20 bg-gray-100 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="p-6 bg-white rounded-md shadow-md">
          
          <h2 class="my-3 text-3xl font-bold tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
  
          <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
            <div class="space-y-4 rounded-md shadow-sm">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="loginForm.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
  
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <div class="mt-1">
                  <input
                    id="password"
                    v-model="loginForm.password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="loginForm.rememberMe"
                  name="remember-me"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="remember-me" class="block ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>
  
            
            </div>
  
            <div>
              <button
                type="submit"
                class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="w-5 h-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
              <RouterLink
                :to="{ name: 'register' }"
                class="block mt-2 text-sm font-medium text-center text-blue-600 hover:text-blue-500"
              >
                Don't have an account? Sign up
              </RouterLink>
            </div>
          </form>
  
         
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import NavbarComponent from '@/components/client/NavbarComponent.vue';
  
  export default {
    components: {
      NavbarComponent
    },
    setup() {

      const loginForm = ref({
        email: '',
        password: '',
        rememberMe: false
      });
  
      const handleLogin = () => {
        console.log('Login submitted:', loginForm.value);
        // Add your login logic here
      };
  
      return {
        loginForm,
        handleLogin
      };
    }
  };
  </script>