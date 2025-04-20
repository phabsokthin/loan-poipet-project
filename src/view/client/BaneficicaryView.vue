<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <div class="w-full max-w-4xl px-1 py-10 m-auto mt-1 mb-9 bg-white">
        <h2 class="text-lg font-semibold text-center bg-blue-800 text-white p-3 rounded-md">Bank Account</h2>
        <form class="bg-white rounded-xl p-8 w-full space-y-6">
            <h2 class="text-2xl font-bold text-center mb-6">Baneficicary Bank Information</h2>
            <div class="grid grid-cols-1 gap-4">
                <div class="relative">
                    <label class="mb-1 font-medium flex items-center gap-2">
                        <!-- Bank Icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 10l9-6 9 6v2H3v-2zM4 12h16v8H4v-8z" />
                        </svg>
                        Please enter your bank name
                    </label>
                    <input type="text" placeholder="Please fill in the information"
                        class="w-full border rounded-lg p-2 pl-10" />
                </div>
                <div class="relative">
                    <label class="mb-1 font-medium flex items-center gap-2">
                        <!-- Credit Card Icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 10h16M4 14h6" />
                        </svg>
                        Please enter your bank number
                    </label>
                    <input type="text" placeholder="Please fill in the information"
                        class="w-full border rounded-lg p-2 pl-10" />
                </div>
            </div>

            <button type="submit"
                class="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full w-full mt-6 hover:from-blue-600 hover:to-indigo-700 transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Confirm
            </button>

        </form>


    </div>
</template>
<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue'
import MobileView from './MobileView.vue';
export default {
    components: {
        NavbarComponent,
        MobileView,
    }

}
</script>
<style></style>