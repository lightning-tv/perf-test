import { createRouter, createWebHashHistory } from 'vue-router';

const Perf = () => import('./Perf.vue');

const routes = [
  { path: '/', component: Perf },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
