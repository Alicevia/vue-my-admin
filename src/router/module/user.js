import { ROUTE } from '@/constant'

const userRoutesMap = {
  [ROUTE.USER_MANAGE]: {
    path: ROUTE.USER_MANAGE,
    name: ROUTE.USER_MANAGE,
    component: () => import('@/views/user-manage/index.vue'),
    meta: {
      title: ROUTE.USER_MANAGE,
      icon: 'personnel-manage',
    },
  },
  [ROUTE.ROLE_LIST]: {
    path: ROUTE.ROLE_LIST,
    name: ROUTE.ROLE_LIST,
    component: () => import('@/views/role-list/index.vue'),
    meta: {
      title: ROUTE.ROLE_LIST,
      icon: 'role',
    },
  },
  [ROUTE.PERMISSION_LIST]: {
    path: ROUTE.PERMISSION_LIST,
    name: ROUTE.PERMISSION_LIST,
    component: () => import('@/views/permission-list/index.vue'),
    meta: {
      title: ROUTE.PERMISSION_LIST,
      icon: 'permission',
    },
  },
  [ROUTE.USER_INFO]: {
    path: ROUTE.USER_INFO,
    name: ROUTE.USER_INFO,
    component: () => import('@/views/user-info/index.vue'),
    props: (route) => ({ id: route.query.id }),
    meta: {
      title: ROUTE.USER_INFO,
    },
  },
  [ROUTE.EXCEL_IMPORT]: {
    path: ROUTE.EXCEL_IMPORT,
    name: ROUTE.EXCEL_IMPORT,
    component: () => import('@/views/import/index.vue'),
    meta: {
      title: ROUTE.EXCEL_IMPORT,
    },
  },
}
const userRoute = {
  path: '/user',
  name: ROUTE.USER,
  component: () => import('@/layout/basicLayout.vue'),
  redirect: '/user/userManage',
  meta: {
    title: ROUTE.USER,
    icon: 'personnel',
  },
  children: [],
}

export default (authAry) => {
  userRoute.children = []
  authAry.forEach((item) => {
    const route = userRoutesMap[item]
    if (route) {
      userRoute.children.push(route)
    }
  })
  if (userRoute.children.length == 0) {
    return null
  }
  return userRoute

  // const routes = authAry.reduce((pre, name) => {
  //   const route = userRoutesMap[name]
  //   if (route) {
  //     pre.push({ ...userRoute, name, children: [route] })
  //   }
  //   return pre
  // }, [])
  // if (!routes.length) {
  //   return null
  // }
  // routes.redirect = { name: routes[0].children[0].name }
  // return routes
}
