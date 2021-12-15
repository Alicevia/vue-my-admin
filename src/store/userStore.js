import { defineStore } from 'pinia'
import { login, userInfo } from '@/api/user'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { ROUTE, TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default defineStore({
  id: 'user',
  state: () => ({
    token: getItem(TOKEN) || '',
    isLogin: false,
    userInfo: {
      avatar: '',
      id: null,
      permission: {},
      role: [],
      title: '',
      username: '',
      _id: null,
    },
  }),
  actions: {
    async doLogin(params) {
      try {
        const data = await login(params)
        this.token = data.token
        setItem(TOKEN, this.token)
        setTimeStamp()
        router.push({ name: ROUTE.HOME })
        return data
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async getUserInfo() {
      try {
        const res = await userInfo()
        Object.assign(this.userInfo, res)
      } catch (error) {
        return Promise.reject(error)
      }
      return Promise.resolve()
    },
    logout() {
      this.token = ''
      this.userInfo = {}
      removeAllItem()
      router.push('/login')
    },
  },
})
