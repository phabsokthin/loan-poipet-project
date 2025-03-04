import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/client/HomeView.vue';
import AboutView from '@/view/client/AboutView.vue';
import ProfileView from '@/view/client/ProfileView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
   {path:'/profile',name:'profile',component:ProfileView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
