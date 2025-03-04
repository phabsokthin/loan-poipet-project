<template>
    <div class="max-w-1xl bg-white py-10 px-5 m-auto w-full mt-10">
        <div class="text-2xl mb-6 text-center ">
            <div
                class="w-[180px] h-[180px] mx-auto rounded-full border-blue-600 border-8 flex items-center justify-center text-white ">
                <div class="space-y-2 text-center">
                    <h1 class="font-mono text-3xl text-black">500</h1>
                    <span class="font-mono text-black">Meduim Credit</span>
                </div>
            </div>
            <h2 class="text-lg font-semibold mt-4">Name</h2>
            <p class="text-gray-500 text-sm">Phone : 0000000</p>
        </div>

        <div class="grid grid-cols-2 gap-6 m-auto">

            <!-- <div class="grid grid-cols-2 gap-6 max-w-xl m-auto"> -->
            <div class="col-span-2 lg:col-span-1">
                <div class="flex items-center border border-gray-300  rounded-full overflow-hidden">
                    <svg class="w-7 h-6 text-gray-500 ml-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5.121 17.804A11.953 11.953 0 0112 15c2.5 0 4.847.776 6.879 2.098M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input type="text" class="border-none p-2 md:text-xl w-full outline-none" placeholder="Personal Information" />
                </div>
            </div>

            <div class="col-span-2 lg:col-span-1">
                <div class="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <svg class="w-7 h-6 text-gray-500 ml-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
                    </svg>
                    <input type="text" class="border-none p-2 md:text-xl w-full outline-none"
                        placeholder="Beneficatary information" />
                </div>
            </div>

            <div class="col-span-2 lg:col-span-1">
                <div class="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <svg class="w-7 h-6 text-gray-500 ml-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 11h8M8 15h4" />
                    </svg>
                    <input type="text" class="border-none p-2 md:text-xl w-full outline-none" placeholder="Loan contract" />
                </div>
            </div>

            <div class="col-span-2 lg:col-span-1">
                <div class="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <svg class="w-7 h-6 text-gray-500 ml-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 7h8M8 11h8M8 15h8M12 3v1m-4-1v1m8-1v1m-9 16h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <input type="text" class="border-none p-2 md:text-xl w-full outline-none"
                        placeholder="Payment Schedule" />
                </div>
            </div>

            <div class="col-span-2 lg:col-span-1">
                <div class="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <svg class="w-7 h-6 text-gray-500 ml-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8c-4.418 0-8 2.239-8 5s3.582 5 8 5 8-2.239 8-5-3.582-5-8-5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8V4m0 16v-4" />
                    </svg>
                    <input type="text" class="border-none p-2 md:text-xl w-full outline-none" placeholder="Transactions" />
                </div>
            </div>

            <div class="col-span-2 lg:col-span-1">
                <div class="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <svg class="w-7 h-6 text-gray-500 ml-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8c-4.418 0-8 2.239-8 5s3.582 5 8 5 8-2.239 8-5-3.582-5-8-5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8V4m0 16v-4" />
                    </svg>
                    <input type="text" class="border-none p-2 md:text-xl w-full outline-none"
                        placeholder="About us" />
                </div>
            </div>
            <div class="col-span-2 flex justify-center mt-6">
                <button
                    class="w-full max-w-sm md:text-xl text-red-600 border border-red-600 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-red-100 transition">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H12" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Logout</span>
                </button>
            </div>

        </div>
    </div>



    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 w-full bg-white shadow-md py-3 flex justify-around">
        <router-link to="/" class="text-gray-500 hover:text-blue-600 flex flex-col items-center">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <span class="text-xs">HOME</span>
        </router-link>

        <router-link to="/wallet" class="text-gray-500 hover:text-blue-600 flex flex-col items-center">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 10H17C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14H21" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="text-xs">WALLET</span>
        </router-link>

        <router-link to="/profile" class="text-blue-600 flex flex-col items-center">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M4 20C4 16.6863 7.13401 14 12 14C16.866 14 20 16.6863 20 20" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="text-xs">PROFILE</span>
        </router-link>
    </div>

</template>

<script>

</script>

<style scoped></style>
