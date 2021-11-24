import { createRouter as CreateRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
  },
]

export default new CreateRouter({
  history: createWebHistory(),
  routes,
})
