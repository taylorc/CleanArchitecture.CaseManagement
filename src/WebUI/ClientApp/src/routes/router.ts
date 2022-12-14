import Home from '../views/Home.vue';

import * as vueRouter from 'vue-router';

export const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: routes,
});
export default router;