<template>
    <div class="p-4 bg-white shadow-sm">
        <div class="flex items-center justify-between">
            <div>
                <a class="text-3xl font-bold leading-none" href="#">
                    <img class="w-12 border"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"
                        alt="">
                </a>
            </div>
            <div class="flex gap-2">

                <a href="#">
                    <div
                        class="flex items-center px-6 py-2 font-mono text-xs font-bold text-black uppercase transition duration-200 bg-gray-100 lg:inline-block lg:ml-auto lg:mr-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chevrons-right">
                            <path d="m6 17 5-5-5-5" />
                            <path d="m13 17 5-5-5-5" />
                        </svg>
                        <span>Sign In</span>
                    </div>
                </a>
                <a href="#">
                    <div
                        class="flex items-center px-6 py-2 font-mono text-xs font-bold text-white uppercase transition duration-200 bg-blue-500 lg:inline-block lg:ml-auto lg:mr-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-user-round">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        <span>Sign up</span>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- bottom navigation -->
    <div class="mx-auto ">
        <div class="fixed bottom-0 z-50 w-full shadow-xl ">
            <div class="flex items-center justify-between px-8 py-2 mx-12 mb-8 bg-blue-600 rounded-xl">
                <div>
                    <RouterLink to="/" class="flex flex-col items-center space-y-2 font-mono uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="font-bold text-white size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="text-xs text-white hover:text-gray-200">Home</span>
                        <!-- <router-link :to="{name:'home'}" class="text-xs text-white hover:text-gray-200">Home</router-link> -->
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="/wallet" class="flex flex-col items-center space-y-2 font-mono">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-white lucide lucide-wallet size-6">
                            <path
                                d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                        </svg>
                        <span class="text-xs text-white uppercase hover:text-gray-200">Wallet</span>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="/profile" class="flex flex-col items-center space-y-2 font-mono uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="text-white lucide lucide-user-cog size-6">
                            <circle cx="18" cy="15" r="3" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                            <path d="m21.7 16.4-.9-.3" />
                            <path d="m15.2 13.9-.9-.3" />
                            <path d="m16.6 18.7.3-.9" />
                            <path d="m19.1 12.2.3-.9" />
                            <path d="m19.6 18.7-.4-1" />
                            <path d="m16.8 12.3-.4-1" />
                            <path d="m14.3 16.6 1-.4" />
                            <path d="m20.7 13.8 1-.4" />
                        </svg>
                        <span class="text-xs text-white hover:text-gray-200">Profile</span>
                    </RouterLink>
                </div>

               
               
            </div>
        </div>
    </div>
</template>
