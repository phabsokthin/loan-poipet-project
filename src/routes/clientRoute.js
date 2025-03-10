import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/client/HomeView.vue';
import AboutView from '@/view/client/AboutView.vue';
import ProfileView from '@/view/client/ProfileView.vue';
import WalletView from '@/view/client/WalletView.vue';


const routes = [
  { path: '/',name:'home', component: HomeView },
  { path: '/about', component: AboutView },
  { path:'/profile',name:'profile',component:ProfileView},
  { path:'/wallet',name:'wallet',component:WalletView},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
