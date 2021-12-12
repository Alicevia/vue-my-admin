<template>
  <!-- <n-layout has-sider style="height: 100%">
    <SideBar></SideBar>
    <n-layout position="absolute">
      <NavBar></NavBar>
      <n-layout-content
        style="top: 50px; bottom: 0; background-color: pink"
        position="absolute"
      >
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout> -->
  <n-layout style="height: 100%">
    <n-layout position="absolute" has-sider>
      <SideBar></SideBar>
      <n-layout>
        <n-layout-header style="height: 50px" bordered
          >颐和园路</n-layout-header
        >

        <div style="position: absolute; top: 50px; width: 100%; height: 100%">
          <router-view></router-view>
        </div>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { inject, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Main from './components/Main.vue'

const theme = inject('theme')

// const message = useMessage()
// message.success('ok')
</script>
<style lang="scss" scoped></style>
