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
          title: '个人中心',
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
      title: 'user',
      icon: 'personnel',
    },
    children: [
      {
        path: ROUTE.MANAGE,
        name: ROUTE.MANAGE,
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage',
        },
      },
      {
        path: ROUTE.ROLE,
        name: ROUTE.ROLE,
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role',
        },
      },
      {
        path: ROUTE.PERMISSION,
        name: ROUTE.PERMISSION,
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: 'permission',
          icon: 'permission',
        },
      },
      {
        path: ROUTE.INFO,
        name: ROUTE.INFO,

        component: () => import('@/views/user-info/index.vue'),
        props: (route) => ({ id: route.query.id }),
        meta: {
          title: 'userinfo',
        },
      },
      {
        path: ROUTE.IMPORT,
        name: ROUTE.IMPORT,
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: 'excelImport',
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
      title: 'article',
      icon: 'article',
    },
    children: [
      {
        path: '/article/ranking',
        name: ROUTE.RANKING,
        component: () => import('@/views/article-ranking/index.vue'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking',
        },
      },
      {
        path: '/article/:id',
        name: ROUTE.ARTICLE_DETAIL,
        component: () => import('@/views/article-detail/index.vue'),
        meta: {
          title: 'articleDetail',
        },
      },
      {
        path: '/article/create',
        name: ROUTE.CREATE,
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create',
        },
      },
      {
        path: '/article/editor/:id',
        name: ROUTE.ARTICLE_EDITOR,
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: 'articleEditor',
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
