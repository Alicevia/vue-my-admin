import router from './index'
import userStore from '@/store/user'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const user = userStore()
  if (user.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else if (whiteList.includes(to.path)) {
    next()
  } else {
    next('/login')
  }

  // 用户已登录不允许进入login
  // 未登录只允许进入login
})
