<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <form action="" @submit.prevent="submitLoan">
        <div class="w-full px-4 py-2 m-auto mt-2 bg-blue-700">
            <div class="max-w-4xl px-4 py-2 m-auto mt-2">
                <h2 class="text-lg font-semibold text-white p-3 rounded-md flex items-center">
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L16 6L12 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M5 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 14L16 18L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    Enter the amount you need to borrow
                </h2>

                <input type="number" v-model="loanAmount"
                    class="w-full p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter Amount money for borrow" min="15000" max="6000000" step="1000">

                <div class="grid grid-cols-2 gap-2">
                    <h2 class="text-lg font-semibold text-white p-3">From: 150,000$</h2>
                    <h2 class="text-right font-semibold text-white p-3">Arrive: 60000000$</h2>
                </div>
            </div>

            <!-- Loan Period Section -->
            <div class="max-w-4xl px-4 py-1 m-auto">
                <h2 class="text-lg font-semibold text-white p-3 m-auto flex items-center">
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
                    </svg>
                    Loan Period
                </h2>
            </div>

            <!-- Loan Period Buttons -->
            <div class="w-full max-w-4xl bg-blue-700 m-auto px-4 p-2 mt-1 rounded-md grid grid-cols-3 gap-4">
                <!-- <button type="button" @click="loanTerm = 6"
                    class="font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md">6
                    months</button>
                <button type="button" @click="loanTerm = 12"
                    class="font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md">12
                    months</button>
                <button type="button" @click="loanTerm = 24"
                    class="font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md">24
                    months</button>
                <button type="button" @click="loanTerm = 36"
                    class="font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md">36
                    months</button>
                <button type="button" @click="loanTerm = 48"
                    class="font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md">48
                    months</button>
                <button type="button" @click="loanTerm = 56"
                    class="font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md">56
                    months</button> -->
                <button type="button" @click="setLoanTerm(6)" :class="buttonClass(6)">6 months</button>
                <button type="button" @click="setLoanTerm(12)" :class="buttonClass(12)">12 months</button>
                <button type="button" @click="setLoanTerm(24)" :class="buttonClass(24)">24 months</button>
                <button type="button" @click="setLoanTerm(36)" :class="buttonClass(36)">36 months</button>
                <button type="button" @click="setLoanTerm(48)" :class="buttonClass(48)">48 months</button>
                <button type="button" @click="setLoanTerm(56)" :class="buttonClass(56)">56 months</button>

            </div>
        </div>

        <!-- Loan Information -->
        <div class="w-full max-w-4xl bg-blue-700 m-auto p-4 mt-4 rounded-lg">
            <h2 class="font-semibold text-4xl text-white p-3 flex items-center justify-center">
                Loan Information
            </h2>
            <div class="p-3 mt-1 grid grid-cols-2 gap-4">
                <span class="text-xl text-gray-300">Amount of money</span>
                <span class="text-right text-white">{{ formattedAmount }}P</span>

                <span class="text-xl text-gray-300">Monthly interest rate</span>
                <span class="text-right font-semibold text-gray-300">{{ interestRate }}%</span>

                <span class="text-xl text-gray-300">Loan term</span>
                <span class="text-right text-gray-300">{{ loanTerm }} months</span>

                <span class="text-xl text-gray-300">Monthly Payment</span>
                <span class="text-right font-semibold text-gray-300">{{ monthlyPayment }}P</span>

                <span class="text-xl text-gray-300">Total Interest</span>
                <span class="text-right text-gray-300">{{ totalInterest }}P</span>

                <span class="text-xl text-gray-300">Total Principal & Interest</span>
                <span class="text-right font-semibold text-gray-300">{{ totalPrincipalAndInterest }}P</span>

                <span class="text-xl text-gray-300">Disbursement date</span>
                <span class="text-right font-semibold text-gray-300">00/00/0000</span>
            </div>
        </div>


        <!-- Confirm Button -->
        <div class="flex justify-center col-span-2 mt-6">
            <button type="submit" :disabled="!isLoanValid || !agreedToTerms" @click.prevent="submitLoan"
                class="flex items-center justify-center w-full max-w-sm gap-3 py-3 text-blue-700 transition border border-blue-600 rounded-full md:text-xl hover:bg-blue-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                <span>Loan Confirm</span>
            </button>
        </div>



        <!-- Agreement Modal -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
            <div class="bg-white p-6 rounded-md shadow-lg max-w-sm">
                <div class="flex justify-center mb-4">
                    <svg class="w-10 h-10 text-orange-400" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L16 6L12 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M5 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 14L16 18L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold text-center mb-4">Confirm!</h2>
                <p class="text-center mb-6">Agree to borrow {{ formattedAmount }}P term {{ loanTerm }} months?</p>
                <div class="flex justify-between">
                    <button @click="showModal = true" class="bg-red-500 text-white py-2 px-4 rounded-md">Cancel</button>
                    <button @click="agreeLoan" class="bg-green-500 text-white py-2 px-4 rounded-md">Agree</button>
                </div>
            </div>
        </div>


        <!-- Agreement Checkbox -->
        <div class="grid justify-center col-span-2 mt-6 mb-8 text-center">
            <label class="p-2 flex items-center justify-center">
                <input type="checkbox" v-model="agreedToTerms" class="mr-2">
                Agree (User Service Agreement & Policy conditions)
            </label>
            <span class="p-2">Loans are risky, borrowing needs to be cautious.</span>
            <span class="p-2">Consume rationally and avoid overdue payments.</span>
        </div>
    </form>
</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue'
import MobileView from './MobileView.vue';

export default {
    components: {
        NavbarComponent,
        MobileView
    },
    data() {
        return {
            loanAmount: 0, // default loan amount
            interestRate: 0.5, // example interest rate
            loanTerm: 0, // example loan term in months
            showModal: false, // controls the visibility of the modal
            errors: {}
        };
    },
    computed: {
        formattedAmount() {
            return this.loanAmount.toLocaleString();
        },
        monthlyPayment() {
            return (this.loanAmount * (1 + this.interestRate / 100) / this.loanTerm).toLocaleString();
        },

        totalInterest() {
            return (this.loanAmount * this.interestRate / 100).toLocaleString();
        },
        totalPrincipalAndInterest() {
            return (this.loanAmount + parseFloat(this.totalInterest.replace(',', ''))).toLocaleString();
        },
        isLoanValid() {
            return this.loanAmount > 0 && this.loanTerm > 0 && this.interestRate > 0;
        }
    },
    methods: {
        setLoanTerm(months) {
            this.loanTerm = months;
            this.errors.loanTerm = ''; // Clear errors when user selects
        },
        buttonClass(months) {
            return this.loanTerm === months
                ? "font-medium text-white px-4 py-2 rounded-md bg-blue-500 p-3 flex items-center justify-center shadow-md"
                : "font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 bg-white p-3 flex items-center justify-center shadow-md";
        },
        // submitLoan() {
        //     if (!this.agreedToTerms) {
        //         alert("You must agree to the terms before proceeding.");
        //         return;
        //     }
        //     alert(`Loan request submitted for ${this.loanAmount}P`);
        // }
        submitLoan() {
            if (!this.agreedToTerms) {
                this.showModal = true;
                return;
            }
            this.showModal = true;
        },
        agreeLoan() {
            this.showModal = false;
            // Proceed with loan submission logic
            alert(`Loan request submitted for ${this.loanAmount}P`);
        }

    }
}
</script>

<style scoped>
.text-right {
    text-align: right;
}

.text-white {
    color: white;
}
</style>