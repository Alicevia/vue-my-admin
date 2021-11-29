import { createRouter as CreateRouter, createWebHistory } from 'vue-router'
import { ROUTE } from '@/constant'

const routes = [
  {
    path: '/login',
    name:ROUTE.LOGIN,
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/',
    name:ROUTE.HOME,
    component: () => import('@/layout/basicLayout.vue'),
  },
]
const router = new CreateRouter({
  history: createWebHistory(),
  routes,
})

export default router
