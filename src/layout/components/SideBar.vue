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
    <n-layout-header style="height: 50px">
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
import { useRoute, useRouter } from 'vue-router'
import { reactive, computed } from 'vue'
import userStore from '@/store/userStore'
import { generateMenus } from '@/utils/route'

const user = userStore()
const userInfo = computed(() => user.userInfo)

const router = useRouter()
const route = useRoute()
const menuState = reactive({
  collapsedWidth: 64,
  collapsedIconSize: 22,
  collapsed: false,
  options: computed(() => generateMenus(router.getRoutes())),
  'onUpdate:value': (key) => {
    router.push({ name: key })
  },
  value: computed(() => route.name),
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
