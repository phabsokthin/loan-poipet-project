<template>
    <div class="hidden lg:block">
        <NavbarComponent />
    </div>
    <div class="lg:hidden">
        <MobileView />
    </div>
    <div class="w-full max-w-4xl px-1 py-10 m-auto mt-1 bg-white mb-9" v-motion-fade>
        <h2 class="p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md">Personal Information</h2>
        <form @submit.prevent="handleSubmitInfo" class="w-full p-8 space-y-6 bg-white rounded-xl">
            <h2 class="mb-6 text-2xl font-bold text-center">Personal Information</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5.121 17.804A9.935 9.935 0 0012 20c2.485 0 4.77-.91 6.516-2.413M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Actual Name: *
                    </label>
                    <input v-model="formData.name" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4v1m0 14v1m8-8h1M4 12H3m15.364 6.364l.707.707M6.343 6.343l-.707-.707M17.657 6.343l.707-.707M6.343 17.657l-.707.707" />
                        </svg>
                        Identification Card No: *
                    </label>
                    <input v-model="formData.idNumber" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                        Please select your gender: *
                    </label>
                    <select v-model="formData.gender" class="w-full p-2 border rounded-lg" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M5 15h14" />
                        </svg>
                        Enter your date of birth: *
                    </label>
                    <input v-model="formData.dob" type="date" class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 11c0-1.104.895-2 2-2s2 .896 2 2v3h1.5a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3H10v-3c0-1.104.895-2 2-2z" />
                        </svg>
                        Enter current job: *
                    </label>
                    <input v-model="formData.job" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 11V7a4 4 0 118 0v4m0 4v4a4 4 0 11-8 0v-4m-4-4h16" />
                        </svg>
                        Stable income: *
                    </label>
                    <input v-model="formData.income" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Enter your loan purpose: *
                    </label>
                    <input v-model="formData.loanPurpose" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 12 17.657 7.343M6 18h6" />
                        </svg>
                        Enter your current address: *
                    </label>
                    <input v-model="formData.address" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5.121 17.804A9.935 9.935 0 0012 20c2.485 0 4.77-.91 6.516-2.413M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Enter the name of your relative: *
                    </label>
                    <input v-model="formData.relativeName" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div>
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5h12M9 3v2m0 4v12m-4 0h8a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
                        </svg>
                        Please enter a contact: *
                    </label>
                    <input v-model="formData.contact" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>

                <div class="md:col-span-2">
                    <label class="flex items-center gap-2 mb-1 font-medium ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 10h4l3 10 4-18 3 8h4" />
                        </svg>
                        Enter your relative's phone number: *
                    </label>
                    <input v-model="formData.relativePhone" type="text" placeholder="Please fill in the information"
                        class="w-full p-2 border rounded-lg" required />
                </div>
            </div>

            <button v-if="!isLoanding" type="submit"
                class="w-full px-4 py-2 mt-6 font-semibold text-white transition-all rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                Continue
            </button>
            <button v-else type="submit" disabled
                class="w-full px-4 py-2 mt-6 font-semibold text-white transition-all rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600">
                Waiting...
            </button>
        </form>
    </div>
</template>

<script>
import NavbarComponent from '@/components/client/NavbarComponent.vue'
import MobileView from './MobileView.vue';
// import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useCollection from '@/firebase/useCollection';   
import getUser from '@/firebase/getUser';


export default {
    components: {
        NavbarComponent,
        MobileView,
    },
    name: 'PersonalInforView',
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    setup(props) {
        // const router = useRouter();
        const isLoanding = ref(false);
        
        const formData = ref({
            name: '',
            idNumber: '',
            gender: '',
            dob: '',
            job: '',
            income: '',
            loanPurpose: '',
            address: '',
            relativeName: '',
            contact: '',
            relativePhone: ''
        });


        const { updateDocs } = useCollection('customers');
        const { user } = getUser();
        

        console.log("Loan Information", props.data);
        

      

        const handleSubmitInfo = async () => {
          
          try{

            isLoanding.value = true;

            const updatedData = {
                name: formData.value.name,
                idNumber: formData.value.idNumber,
                gender: formData.value.gender,
                dob: formData.value.dob,
                job: formData.value.job,
                income: formData.value.income,
                loanPurpose: formData.value.loanPurpose,
                address: formData.value.address,
                relativeName: formData.value.relativeName,
                contact: formData.value.contact,
                relativePhone: formData.value.relativePhone 
            };
            
            await updateDocs(user?.value?.uid, updatedData);
            
            console.log("Updated Data", updatedData);   

            // router.push({
            //         path: '/baneficicary',
            //         query: {
            //             data: JSON.stringify(props.data),
            //         }
            //     });
            
            isLoanding.value = false;
            
          }
          catch(err){
            console.log(err)
          }
          finally{
            isLoanding.value = false;
          }
        };

       

        return {
            formData,
            handleSubmitInfo,
            isLoanding,
        }
    }
}
</script>

<style></style>