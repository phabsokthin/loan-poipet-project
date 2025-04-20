<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <div class="w-full max-w-4xl px-2 py-2 m-auto mt-1 bg-white">
        <h2 class="text-lg font-semibold text-center bg-blue-600 text-white p-3 rounded-md">KYC Identification</h2>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4">
            <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">KYC Identification</h1>
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Front ID Card Section -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Front ID Card</label>
                    <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <div class="flex justify-center">
                                <template v-if="!frontImage">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                        viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </template>
                                <img v-else :src="frontImage" class="h-48 object-contain" alt="Front ID preview">
                            </div>
                            <div class="flex justify-center text-sm text-gray-600">
                                <label for="front-upload"
                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                    <span v-if="!frontImage">Upload a file</span>
                                    <span v-else>Change file</span>
                                    <input id="front-upload" name="front-upload" type="file" class="sr-only"
                                        @change="handleFrontUpload" accept="image/*">
                                </label>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                        </div>
                    </div>
                </div>

                <!-- Back ID Card Section -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Back ID Card</label>
                    <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <div class="flex justify-center">
                                <template v-if="!backImage">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                        viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </template>
                                <img v-else :src="backImage" class="h-48 object-contain" alt="Back ID preview">
                            </div>
                            <div class="flex justify-center text-sm text-gray-600">
                                <label for="back-upload"
                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                    <span v-if="!backImage">Upload a file</span>
                                    <span v-else>Change file</span>
                                    <input id="back-upload" name="back-upload" type="file" class="sr-only"
                                        @change="handleBackUpload" accept="image/*">
                                </label>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                        </div>
                    </div>
                </div>

                <!-- Selfie Section -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Selfie with Photo</label>
                    <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <div class="flex justify-center">
                                <template v-if="!selfieImage">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                        viewBox="0 0 48 48" aria-hidden="true">
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </template>
                                <img v-else :src="selfieImage" class="h-48 object-contain" alt="Selfie preview">
                            </div>
                            <div class="flex justify-center text-sm text-gray-600">
                                <button v-if="!isCameraOpen" type="button" @click="openCamera"
                                    class="relative bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                    Take a photo
                                </button>
                                <button v-else type="button" @click="takePhoto"
                                    class="relative bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                    Capture
                                </button>
                                <label v-if="!isCameraOpen"
                                    class="ml-3 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                    <span v-if="!selfieImage">or upload</span>
                                    <span v-else>or change</span>
                                    <input type="file" class="sr-only" @change="handleSelfieUpload" accept="image/*">
                                </label>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                        </div>
                    </div>
                </div>

                <!-- Camera Modal -->
                <div v-if="isCameraOpen"
                    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div class="bg-white rounded-lg p-4 max-w-md w-full">
                        <div class="relative">
                            <video ref="video" autoplay class="w-full h-auto rounded-lg"></video>
                            <canvas ref="canvas" class="hidden"></canvas>
                        </div>
                        <div class="mt-4 flex justify-between">
                            <button type="button" @click="closeCamera"
                                class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                                Cancel
                            </button>
                            <button type="button" @click="takePhoto"
                                class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                Take Photo
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Submit Button -->
                <div>
                    <button type="submit" :disabled="!isFormComplete"
                        :class="{ 'opacity-50 cursor-not-allowed': !isFormComplete, 'hover:bg-indigo-700': isFormComplete }"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
export default {
    components: {
        NavbarComponent,
        MobileView
    },
    name: 'KYCForm',
    data() {
        return {
            frontImage: null,
            backImage: null,
            selfieImage: null,
            isCameraOpen: false,
            stream: null
        }
    },
    computed: {
        isFormComplete() {
            return this.frontImage && this.backImage && this.selfieImage;
        }
    },
    methods: {
        handleFrontUpload(event) {
            const file = event.target.files[0];
            if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
                this.frontImage = URL.createObjectURL(file);
            } else {
                alert('Please select an image file under 5MB');
            }
        },
        handleBackUpload(event) {
            const file = event.target.files[0];
            if (file && file.size <= 5 * 1024 * 1024) {
                this.backImage = URL.createObjectURL(file);
            } else {
                alert('Please select an image file under 5MB');
            }
        },
        handleSelfieUpload(event) {
            const file = event.target.files[0];
            if (file && file.size <= 5 * 1024 * 1024) {
                this.selfieImage = URL.createObjectURL(file);
            } else {
                alert('Please select an image file under 5MB');
            }
        },
        async openCamera() {
            try {
                this.isCameraOpen = true;
                this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
                this.$refs.video.srcObject = this.stream;
            } catch (error) {
                console.error('Error accessing camera:', error);
                alert('Could not access the camera. Please check permissions.');
                this.isCameraOpen = false;
            }
        },
        closeCamera() {
            if (this.stream) {
                this.stream.getTracks().forEach(track => track.stop());
            }
            this.isCameraOpen = false;
        },
        takePhoto() {
            if (!this.isCameraOpen) return;

            const video = this.$refs.video;
            const canvas = this.$refs.canvas;

            // Set canvas dimensions to match video stream
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw current video frame to canvas
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas to data URL and set as selfie image
            this.selfieImage = canvas.toDataURL('image/jpeg');

            // Close camera
            this.closeCamera();
        },
        handleSubmit() {
            if (this.isFormComplete) {
                // In a real app, you would upload the images to your server here
                alert('KYC information submitted successfully!');
                console.log({
                    frontImage: this.frontImage,
                    backImage: this.backImage,
                    selfieImage: this.selfieImage
                });
            }
        }
    },
    beforeUnmount() {
        // Clean up camera stream when component is destroyed
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
        }
    }
}
</script>