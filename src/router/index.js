import { createRouter as CreateRouter, createWebHistory } from 'vue-router'
import { ROUTE } from '@/constant'
import BasicLayout from '@/layout/basicLayout.vue'

const routes = [
  {
    path: '/login',
    name: ROUTE.LOGIN,
    component: () => import('../views/login/index.vue'),
    meta: {
      title: ROUTE.LOGIN,
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/noFound',
  },
  {
    path: '/',
    name: ROUTE.HOME,
    redirect: '/profile',
    component: BasicLayout,
    children: [
      {
        path: 'profile',
        name: ROUTE.PROFILE,
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: ROUTE.PROFILE,
          icon: 'profile',
        },
      },
      {
        path: '404',
        name: ROUTE[404],
        component: () => import('@/views/error-page/404.vue'),
      },
      {
        path: '401',
        name: ROUTE[401],
        component: () => import('@/views/error-page/401.vue'),
      },
    ],
  },
]

const router = new CreateRouter({
  history: createWebHistory(),
  routes: [...routes],
})
export default router
