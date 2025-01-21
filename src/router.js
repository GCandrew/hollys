
/*
import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../src/pages/menu.vue'; // menu.vue 파일 경로에 맞게 수정하세요.

const routes = [
  { path: '/', component: () => import('../src/App.vue') }, // 홈 경로
  { path: '/menu', component: Menu }, // Menu 컴포넌트 연결
];

const router = createRouter({
  history: createWebHistory(), // 히스토리 모드
  routes,
});

export default router;  1-14 수정 현재 useRouter.js, router.js, index.js 파일들이 서로 다른 라우터 설정을 가지고 있는 것으로 보입니다.
라우터 설정을 하나의 파일로 통합하고 일관되게 사용하도록 수정해 보세요.*/

import { createRouter, createWebHistory } from 'vue-router';
import Main from '../src/pages/main.vue';
import Menu from '../src/pages/menu.vue'; // 파일 경로에 맞게 수정
import Mall from '../src/pages/mall.vue';
import Membership from '../src/pages/membership.vue';
import News from '../src/pages/News.vue';
import Store from '../src/pages/Store.vue';
import About from '../src/pages/About.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/menu', component: Menu },
  { path: '/mall', component: Mall },
  { path: '/membership', component: Membership },
  { path: '/news', component: News },
  { path: '/store', component: Store },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;