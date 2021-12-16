import { createRouter as CreateRouter, createWebHistory } from 'vue-router'
import { ROUTE } from '@/constant'
import BasicLayout from '@/layout/basicLayout.vue'

const routes = [
  {
    path: '/login',
    name: ROUTE.LOGIN,
    component: () => import('../views/login/index.vue'),
  },

  {
    path: '/',
    name: ROUTE.HOME,
    redirect: '/profile',
    component: BasicLayout,
    children: [
      {
        path: '/profile',
        name: ROUTE.PROFILE,
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: ROUTE.PROFILE,
          icon: 'profile',
        },
      },
      {
        path: '/404',
        name: ROUTE[404],
        component: () => import('@/views/error-page/404.vue'),
      },
      {
        path: '/401',
        name: ROUTE[401],
        component: () => import('@/views/error-page/401.vue'),
      },
    ],
  },
]

const privateRoutes = [
  {
    path: '/user',
    name: ROUTE.USER,
    component: BasicLayout,
    redirect: '/user/manage',
    meta: {
      title: ROUTE.USER,
      icon: 'personnel',
    },
    children: [
      {
        path: ROUTE.USER_MANAGE,
        name: ROUTE.USER_MANAGE,
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: ROUTE.USER_MANAGE,
          icon: 'personnel-manage',
        },
      },
      {
        path: ROUTE.ROLE_LIST,
        name: ROUTE.ROLE_LIST,
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: ROUTE.ROLE_LIST,
          icon: 'role',
        },
      },
      {
        path: ROUTE.PERMISSION_LIST,
        name: ROUTE.PERMISSION_LIST,
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: ROUTE.PERMISSION_LIST,
          icon: 'permission',
        },
      },
      {
        path: ROUTE.USER_INFO,
        name: ROUTE.USER_INFO,
        component: () => import('@/views/user-info/index.vue'),
        props: (route) => ({ id: route.query.id }),
        meta: {
          title: ROUTE.USER_INFO,
        },
      },
      {
        path: ROUTE.EXCEL_IMPORT,
        name: ROUTE.EXCEL_IMPORT,
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: ROUTE.EXCEL_IMPORT,
        },
      },
    ],
  },
  {
    path: '/article',
    name: ROUTE.ARTICLE,
    component: BasicLayout,
    redirect: '/article/ranking',
    meta: {
      title: ROUTE.ARTICLE,
      icon: 'article',
    },
    children: [
      {
        path: '/article/ranking',
        name: ROUTE.ARTICLE_RANKING,
        component: () => import('@/views/article-ranking/index.vue'),
        meta: {
          title: ROUTE.ARTICLE_RANKING,
          icon: 'article-ranking',
        },
      },
      {
        path: '/article/:id',
        name: ROUTE.ARTICLE_DETAIL,
        component: () => import('@/views/article-detail/index.vue'),
        meta: {
          title: ROUTE.ARTICLE_DETAIL,
        },
      },
      {
        path: '/article/create',
        name: ROUTE.ARTICLE_CREATE,
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: ROUTE.ARTICLE_CREATE,
          icon: 'article-create',
        },
      },
      {
        path: '/article/editor/:id',
        name: ROUTE.ARTICLE_EDITOR,
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: ROUTE.ARTICLE_EDITOR,
        },
      },
    ],
  },
]
const router = new CreateRouter({
  history: createWebHistory(),
  routes: [...routes, ...privateRoutes],
})

export default router
