import HelloWorld from '../components/HelloWorld.vue';

import * as vueRouter from 'vue-router';

export const routes = [
  { path: '/', component: HelloWorld }// ,
  // { path: '/about', component: About },
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: routes,
});
export default router;