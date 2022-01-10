import { defineStore } from 'pinia'
import { login, userInfo } from '@/api/user'
import { getItem, removeAllItem, setItem } from '@/utils/storage'

import { ROUTE, TOKEN, TAGS_VIEW } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
import privateRoutesFnAry from '@/router/module'

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
  getters: {},
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
    generateRoutes() {
      const { menus } = this.userInfo.permission
      if (menus) {
        // const routes = privateRoutesFnAry.reduce((pre, item) => {
        //   pre.push(...item(menus).filter((a) => a))
        //   return pre
        // }, [])
        const routes = privateRoutesFnAry
          .map((item) => item(menus))
          .filter((item) => item)
        return routes
      }
      return false
    },
    logout() {
      this.token = ''
      router.push('/login')
      this.resetRoutes()
      this.userInfo = {}
      removeAllItem()
    },
    resetRoutes() {
      if (this.userInfo.permission.menus) {
        this.userInfo.permission?.menus.forEach((item) => {
          router.removeRoute(item)
        })
        router.removeRoute(ROUTE.USER)
        router.removeRoute(ROUTE.ARTICLE)
      }
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
