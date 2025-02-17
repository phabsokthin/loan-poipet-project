<template>
    <div class="hidden lg:block">
        <NavbarComponent />
        <SliderComponent />

        <HomeComponent/>
    </div>
    <div class="lg:hidden">
        <MobileView />

        <SliderComponent />
        <HomeComponent/>

        <!-- <pre>{{ customer }}</pre> -->
    </div>
</template>

<script>
import getCollection from '@/firebase/getCollection';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import SliderComponent from '@/components/client/SliderComponent.vue';
import MobileView from './MobileView.vue';
import HomeComponent from '@/components/client/HomeComponent.vue';

export default {
    components: {
        NavbarComponent,
        SliderComponent,
        MobileView,
        HomeComponent
    },
    setup() {

        const { document: customer } = getCollection('customer');
        return { customer };
    }
}
</script>
