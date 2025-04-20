<template>
  <div>
    <!-- Navbar -->
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="lg:hidden">
      <MobileView />
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-4xl px-1 py-10 m-auto mt-1 mb-9 bg-white">
      <!-- Loan Info -->
      <h2 class="text-lg font-semibold text-center bg-blue-600 text-white p-3 rounded-md">Personal Information</h2>
      <div v-if="!showSuccess"
        class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md max-w-md mx-auto mb-3 mt-8  p-6 w-full space-y-6">
          <h2 class="text-lg font-bold mb-3">Loan details</h2>
          <div class="space-y-2">
            <div class="flex justify-between">
              <p class="text-white">Loan amount</p>
              <p class="font-medium">₱200,000</p>
            </div>
            <div class="flex justify-between">
              <p class="text-white">Loan term</p>
              <p class="font-medium">12 months</p>
            </div>
            <div class="flex justify-between">
              <p class="text-white">Contract</p>
              <button class="text-white underline hover:text-yellow-200 font-bold">View Contract</button>
            </div>
          </div>
      </div>

      <!-- Signature Section -->
      <div v-if="!showSuccess" class="max-w-md mx-auto border p-4 rounded">
        <p class="mb-2 text-sm text-gray-600">
          ↓ Please sign within the dotted line, the signature must be standard, complete and clear
        </p>
        <canvas ref="signaturePad" class="border border-gray-300 w-full h-40 rounded-md mb-2"></canvas>
        <div class="flex gap-2">
          <button v-if="!signatureConfirmed" @click="clearSignature"  class="bg-red-500 text-white px-4 py-1 rounded ">Reset</button>
          <button v-if="!signatureConfirmed" @click="confirmSignature"
            class="bg-blue-600 text-white px-4 py-1 rounded">Signature confirmation</button>
        </div>

        <!-- After Signature Confirmation -->
        <div v-if="signatureConfirmed" class="mt-4">
          <button @click="agreeSignature"
            class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full px-8 py-2 rounded-full">Agree</button>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="max-w-md mx-auto mt-6 text-center">
        <img :src="require('@/assets/success.webp')" alt="How to Sign" class="mx-auto mb-4">
        <h2 class="text-xl font-bold mb-2 text-green-600">✔ Congratulations</h2>
        <p class="text-gray-700">Your loan application was successful, please wait for approval.</p>
        <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Contact Customer Service</button>
      </div>

      <!-- Bottom Bar: Contract Terminated -->
      <div v-if="signatureConfirmed && !showSuccess"
        class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-2">
        Contract terminated
      </div>

      <!-- Modal for Signature Instruction -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded shadow-md text-center">
          <img :src="require('@/assets/signature.avif')" alt="How to Sign" class="mx-auto mb-4">
          <button @click="showModal = false" class="bg-blue-500 text-white px-4 py-1 rounded">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';

export default {
  components: {
    NavbarComponent,
    MobileView,
  },
  data() {
    return {
      signaturePad: null,
      showSuccess: false,
      showModal: true, // show the modal at start
      signatureConfirmed: false,
    };
  },
  mounted() {
    const canvas = this.$refs.signaturePad;
    this.signaturePad = new SignaturePad(canvas);
  },
  methods: {
    clearSignature() {
      this.signaturePad.clear();
    },
    confirmSignature() {
      if (this.signaturePad.isEmpty()) {
        alert('Please provide a signature first.');
        return;
      }
      this.signatureConfirmed = true;
    },
    agreeSignature() {
      if (this.signaturePad.isEmpty()) {
        alert('Please provide a signature first.');
        return;
      }
      
      // Save signature as PNG
      const signatureData = this.signaturePad.toDataURL('image/png');
      
      // Create a download link
      const link = document.createElement('a');
      link.href = signatureData;
      link.download = 'signature.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show alert message
      alert('Your signature has been saved successfully!');
      
      // Proceed to show success message
      this.showSuccess = true;
    },
  },
};
</script>

<style scoped>
canvas {
  touch-action: none;
}
</style>