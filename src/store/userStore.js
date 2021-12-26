import { defineStore } from 'pinia'
import { login, userInfo } from '@/api/user'
import { getItem, removeAllItem, setItem } from '@/utils/storage'

import { ROUTE, TOKEN, TAGS_VIEW } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
import { generateMenus } from '@/utils/route'

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
    tagsViewList: getItem(TAGS_VIEW) || [],
  }),
  getters: {
    menuList() {
      return generateMenus(router.getRoutes())
    },
  },
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
    addTagsViewItem(route) {
      const isExist = this.tagsViewList.some((item) => item.path == route.path)
      if (!isExist) {
        this.tagsViewList.push(route)
        setItem(TAGS_VIEW, this.tagsViewList)
      }
    },
    initTagsView(currentRoute) {
      const len = this.tagsViewList.length
      if (len == 0) {
        router.push({ name: ROUTE.PROFILE }).then(() => {
          setItem(TAGS_VIEW, this.tagsViewList)
        })
      } else {
        const isExist = this.tagsViewList.some(
          (item) => item.path == currentRoute.path,
        )
        if (!isExist) {
          router.push(this.tagsViewList.at(-1)).then(() => {
            setItem(TAGS_VIEW, this.tagsViewList)
          })
        } else {
          setItem(TAGS_VIEW, this.tagsViewList)
        }
      }
    },
    removeTagsViewItem(index, currentRoute) {
      this.tagsViewList.splice(index, 1)

      this.initTagsView(currentRoute)
    },
    removeTagsRightItem(index, currentRoute) {
      this.tagsViewList.splice(index)
      this.initTagsView(currentRoute)
    },
    removeTagsOtherItem(index, currentRoute) {
      this.tagsViewList = [this.tagsViewList[index]]
      this.initTagsView(currentRoute)
    },
  },
})
