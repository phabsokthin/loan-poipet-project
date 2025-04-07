<template>
    <NavigationBarComponent/>
    <div class="flex justify-center h-screen px-4 pt-20 bg-gray-100 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div class="p-6 bg-white rounded-md shadow-md">


                <h2 class="my-3 text-3xl font-bold tracking-tight text-center text-gray-900">
                    Sign up for an account
                </h2>


                <form class="space-y-6" @submit.prevent="handleSubmit">

                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-700">Username: *</label>
                        <div class="mt-1">
                            <input id="username" v-model="form.username" type="text" required
                                class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email: *</label>
                        <div class="mt-1">
                            <input id="email" v-model="form.email" type="email" autocomplete="email" required
                                class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>


                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number: *</label>
                        <div class="mt-1">
                            <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" required
                                class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>


                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password: *</label>
                        <div class="mt-1">
                            <input id="password" v-model="form.password" type="password" autocomplete="new-password" required
                                class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div class="mt-1">
                            <input id="confirm_password" v-model="form.confirm_password" type="password" autocomplete="new-password" required
                                class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
                            Register Account
                        </button>

                        <RouterLink :to="{name: 'login'}"
                            class="block mt-2 text-sm font-medium text-center text-blue-600 hover:text-blue-500">
                            Already have an account? Sign in
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import NavigationBarComponent from '@/components/client/NavbarComponent.vue';

export default {

    components: {
        NavigationBarComponent
    },


    setup() {
        const form = ref({
            username: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: ''
        });

        const handleSubmit = () => {
            // Handle form submission here
            console.log('Form submitted:', form.value);
            // You can add validation and API calls here
        };

        return {
            form,
            handleSubmit
        };
    },
};
</script>