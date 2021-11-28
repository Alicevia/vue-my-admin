import { createRouter as CreateRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/layout/basicLayout.vue'),
  },
]
const router = new CreateRouter({
  history: createWebHistory(),
  routes,
})

export default router
