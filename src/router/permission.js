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
        } catch (error) {
          console.info('获取个人信息失败', error)
        }
      }
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
