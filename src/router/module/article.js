import { ROUTE } from '@/constant'

const articleRoutesMap = {
  [ROUTE.ARTICLE_RANKING]: {
    path: 'ranking',
    name: ROUTE.ARTICLE_RANKING,
    component: () => import('@/views/article-ranking/index.vue'),
    meta: {
      title: ROUTE.ARTICLE_RANKING,
      icon: 'article-ranking',
    },
  },
  [ROUTE.ARTICLE_DETAIL]: {
    path: ':id',
    name: ROUTE.ARTICLE_DETAIL,
    component: () => import('@/views/article-detail/index.vue'),
    meta: {
      title: ROUTE.ARTICLE_DETAIL,
    },
  },
  [ROUTE.ARTICLE_CREATE]: {
    path: 'create',
    name: ROUTE.ARTICLE_CREATE,
    component: () => import('@/views/article-create/index.vue'),
    meta: {
      title: ROUTE.ARTICLE_CREATE,
      icon: 'article-create',
    },
  },
  [ROUTE.ARTICLE_EDITOR]: {
    path: 'editor/:id',
    name: ROUTE.ARTICLE_EDITOR,
    component: () => import('@/views/article-create/index.vue'),
    meta: {
      title: ROUTE.ARTICLE_EDITOR,
    },
  },
}

const articleRoute = {
  path: '/article',
  name: ROUTE.ARTICLE,
  component: () => import('@/layout/basicLayout.vue'),
  redirect: '/article/ranking',
  meta: {
    title: ROUTE.ARTICLE,
    icon: 'article',
  },
  children: [],
}

export default (authAry) => {
  articleRoute.children = []

  authAry.forEach((item) => {
    const route = articleRoutesMap[item]
    if (route) {
      articleRoute.children.push(route)
    }
  })
  if (articleRoute.children.length == 0) {
    return null
  }
  return articleRoute
  // const routes = authAry.reduce((pre, name) => {
  //   const route = articleRoutesMap[name]
  //   if (route) {
  //     pre.push({ ...articleRoute, name, children: [route] })
  //   }
  //   return pre
  // }, [])

  // if (!routes.length) {
  //   return null
  // }
  // routes.redirect = { name: routes[0].children[0].name }
  // return routes
}
