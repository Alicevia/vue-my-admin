import { defineStore } from 'pinia'
import { login } from '@/api/user'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { ROUTE, TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default defineStore({
  id: 'user',
  state: () => ({
    token: getItem(TOKEN) || '',
    isLogin: false,
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
    logout() {
      this.token = ''
      removeAllItem()
    },
  },
})
