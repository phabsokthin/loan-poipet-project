import { createRouter, createWebHistory } from 'vue-router';
import AdminHome from '@/view/admin/AdminHome.vue';

const routes = [
  { path: '/admin', component: AdminHome },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
