<template>
  <!-- <n-layout style="height: 360px">
    <n-layout-header style="height: 64px; padding: 24px" bordered
      >颐和园路</n-layout-header
    >
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
      >
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;">
        <div style="height: 100%; background-color: red"></div>
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
      城府路
    </n-layout-footer>
  </n-layout> -->
  <n-layout has-sider style="height: 100%">
    <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content style="top: 70px; bottom: 70px" position="absolute">
        <div style="height: 100%; background-color: red">123</div>
      </n-layout-content>
      <n-layout-footer position="absolute">成府路</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Main from './components/Main.vue'
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  .right {
  }
}
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
