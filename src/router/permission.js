import router from './index'
import userStore from '@/store/userStore'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const user = userStore()
  if (user.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!user.userInfo.id) {
        try {
          await user.getUserInfo() // 调用 超时 或者 失败 都是登出中断
          const routes = user.generateRoutes()
          routes
            .filter((item) => item)
            .forEach((item) => {
              router.addRoute(item)
            })
          return next(to.fullPath)
        } catch (error) {
          console.info('获取个人信息失败', error)
          return next('/login')
        }
      }
      return next()
    }
  } else if (whiteList.includes(to.path)) {
    return next()
  } else {
    return next('/login')
  }
  return null
  // 用户已登录不允许进入login
  // 未登录只允许进入login
})
