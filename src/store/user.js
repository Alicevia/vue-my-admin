import { defineStore } from 'pinia'
import { login } from '@/api/user'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

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
        this.isLogin = true
        router.push({ path: '/' })
        return data
      } catch (e) {
        return Promise.reject(e)
      }
    },
  },
})
