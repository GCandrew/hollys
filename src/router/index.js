import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '../pages/menu.vue';

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage, // menu.vue 파일과 연결
  },
  {
    path: '/mall',
    name: 'HollysMall',
    component: () => import('../pages/mall.vue'), // lazy loading 예시
  },
  {
    path: '/membership',
    name: 'Membership',
    component: () => import('../pages/membership.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../pages/news.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../pages/store.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;