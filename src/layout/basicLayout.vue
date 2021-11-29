<template>
  <n-layout has-sider class="container">
    <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
    <n-layout class="right" :native-scrollbar="false">
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content class="content" content-style="padding: 24px;">
        <div style="height: 300px">sfj</div>
        <div style="height: 300px">sfj</div>
        <div style="height: 300px">sfj</div>
        <div style="height: 300px">sfj</div>
        <div style="height: 300px">sfj</div>
        <div style="height: 300px">sfj</div>
      </n-layout-content>
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
    .content {
    }
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
