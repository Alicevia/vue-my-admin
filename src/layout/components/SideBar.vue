<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="60"
    :width="218"
    :collapsed="menuState.collapsed"
    show-trigger
    @collapse="menuState.collapsed = true"
    @expand="menuState.collapsed = false"
  >
    <n-layout-header bordered style="height: 50px">
      <div class="logo">
        <n-avatar size="small" :src="userInfo.avatar" />
        <h1 v-show="!menuState.collapsed" class="logo-title">ALICEVIA</h1>
      </div>
    </n-layout-header>
    <n-layout-content
      class="content"
      position="absolute"
      :native-scrollbar="false"
    >
      <n-menu v-bind="menuState" />
    </n-layout-content>
  </n-layout-sider>
</template>

<script setup>
import { useRouter } from 'vue-router'

import { h, reactive, inject, computed } from 'vue'
import { NIcon } from 'naive-ui'
import { BookOutline } from '@vicons/ionicons5'
import { useI18n } from 'vue-i18n'
import userStore from '@/store/userStore'

const { t } = useI18n()
const user = userStore()
const userInfo = computed(() => user.userInfo)

function isEmpty(data) {
  if (!data) return true
  if (JSON.stringify(data) == '{}') return true
  if (JSON.stringify(data) == '[]') return true
  return false
}
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
// 将meta内的字段拷贝到外层
function assignMeta(ary) {
  for (let index = 0; index < ary.length; index++) {
    const item = ary[index]
    if (item.meta?.icon) {
      Object.assign(item, item.meta || {})
      item.icon = renderIcon(BookOutline)
      item.title = t(`route.${item.title}`)
    } else {
      ary.splice(index, 1)
      index--
    }
  }
}
const generateMenus = (routes) => {
  const childrenRoutes = routes.filter((item) => item.children.length > 0)
  const result = childrenRoutes.reduce((pre, item) => {
    if (item.path == '/') {
      assignMeta(item.children)
      pre.push(...item.children.filter((route) => route.meta?.icon))
    } else {
      Object.assign(item, item.meta || {})
      item.icon = renderIcon(BookOutline)
      assignMeta(item.children)
      item.title = t(`route.${item.title}`)
      pre.push(item)
    }
    return pre
  }, [])

  return result
}

const router = useRouter()
const menuState = reactive({
  collapsedWidth: 64,
  collapsedIconSize: 22,
  collapsed: false,
  options: computed(() => generateMenus(router.getRoutes())),
  keyField: 'title',
  labelField: 'title',
  'onUpdate:value': (key, item) => {
    router.push({ name: item.name })
  },
})
</script>
<style lang="scss" scoped>
.content {
  top: 50px;
  bottom: 0;
}
.logo {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: bold;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 15px;
  }
}
</style>
