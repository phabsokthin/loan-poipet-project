<template>
    <div class="bg-white shadow-sm p-4">
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
                        class="flex items-center bg-gray-100   font-bayon lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-xs text-black font-bold  rounded-xl transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chevrons-right">
                            <path d="m6 17 5-5-5-5" />
                            <path d="m13 17 5-5-5-5" />
                        </svg>
                        <span>ចូលប្រើប្រាស់</span>
                    </div>
                </a>
                <a href="#">
                    <div
                        class="flex items-center  bg-blue-500 font-bayon lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-xs text-white font-bold  rounded-xl transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-user-round">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        <span>បង្កើតថ្មី</span>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- bottom navigation -->
    <div class="  mx-auto">
        <div class="z-50 fixed bottom-0 w-full  shadow-xl ">
            <div class="flex justify-between  bg-blue-600 items-center p-3 m-5 rounded-2xl">
                <div>
                    <RouterLink to="/" class=" font-bayon flex-col flex items-center  space-y-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-white font-bold">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="text-white text-xs hover:text-gray-200">ទំព័រដើម</span>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="/" class=" font-bayon flex-col flex items-center  space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-hand-coins size-6 text-white">
                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                            <path
                                d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                            <path d="m2 16 6 6" />
                            <circle cx="16" cy="9" r="2.9" />
                            <circle cx="6" cy="5" r="3" />
                        </svg>
                        <span class="text-white text-xs hover:text-gray-200">កម្ចីប្រាក់</span>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="/" class=" font-bayon flex-col flex items-center  space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-user-cog size-6 text-white">
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
                        <span class="text-white text-xs hover:text-gray-200">សេវាបុគ្គល</span>
                    </RouterLink>
                </div>

               
                <div>
                    <RouterLink to="/" class=" font-bayon flex-col flex items-center  space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-handshake size-6 text-white">
                            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                            <path
                                d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                            <path d="m21 3 1 11h-2" />
                            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                            <path d="M3 4h8" />
                        </svg>
                        <span class="text-white text-xs hover:text-gray-200">សេវាអាជីវកម្ម</span>
                    </RouterLink>
                </div>
                <div>
                    <RouterLink to="/" class=" font-bayon flex-col flex items-center  space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-send size-6 text-white">
                            <path
                                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                            <path d="m21.854 2.147-10.94 10.939" />
                        </svg>
                        <span class="text-white text-xs hover:text-gray-200">ទំនាក់ទំនង</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
