<template>
  <div class="min-h-screen flex items-center justify-center hero-image">
    <div class="w-full max-w-md px-8 py-12">
      <form @submit.prevent="handleLogin" class="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <!-- Logo Section -->
        <div class="flex justify-center my-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-circle-user w-24 h-24">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
        </div>

        <!-- Phone Input -->
        <div class="flex items-center my-6 mx-4 border-b-2 border-gray-700 hover:border-green-800 transition-colors duration-300">
          <label class="self-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </label>
          <input v-model="loginForm.phone" class="w-full py-3 pl-4 border-0 focus:outline-none bg-transparent"
            type="tel" placeholder="Phone number" required>
        </div>

        <!-- Password Input -->
        <div class="flex items-center my-6 mx-4 border-b-2 border-gray-700 hover:border-green-800 transition-colors duration-300">
          <label class="self-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-lock-keyhole">
              <circle cx="12" cy="16" r="1" />
              <rect x="3" y="10" width="18" height="12" rx="2" />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
          </label>
          <input v-model="loginForm.password" class="w-full py-3 pl-4 border-0 focus:outline-none bg-transparent"
            type="password" placeholder="Password" required>
        </div>

        <!-- Login Button -->
        <div class="mt-8 mb-4 mx-4">
          <button type="submit"
            class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            LOGIN
          </button>
        </div>
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white bg-opacity-90 text-gray-500">
                Don't have an account?
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 mb-4 mx-4">
          <RouterLink :to="{name: 'register'}" 
            class="w-full py-3 flex justify-center bg-white hover:bg-gray-100 text-black border-2 font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { loginWithPhone } from '@/firebase/Auth';

export default {
  setup() {
    const loginForm = ref({
      phone: '',
      password: ''
    });

    const handleLogin = async () => {
      const result = await loginWithPhone(loginForm.value.phone, loginForm.value.password);
      if (result.user) {
        alert('Login successful!');
        // Optionally redirect to dashboard or home
      } else {
        alert(result.error || 'Login failed');
      }
    };

    return {
      loginForm,
      handleLogin
    };
  }
};
</script>

<style scoped>
.hero-image {
  background-image: url("/src/assets/loan_chart.jpg");
  background-color: #cccccc;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>