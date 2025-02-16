<template>
    <div class="hidden lg:block">
        <NavbarComponent />
        <SliderComponent />
    </div>
    <div class="lg:hidden">
        <MobileView/>
   
    <SliderComponent />
    <div>Clent Home</div>

    <pre>{{ customer }}</pre>
    </div>
</template>

<script>
import getCollection from '@/firebase/getCollection';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import SliderComponent from '@/components/client/SliderComponent.vue';
import MobileView from './MobileView.vue';

export default {
    components: {
        NavbarComponent,
        SliderComponent,
        MobileView
    },
    setup() {

        const {document: customer} = getCollection('customer');
        return {customer};
     }
}
</script>
