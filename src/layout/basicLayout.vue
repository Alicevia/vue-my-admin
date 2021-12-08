<template>
  <div class="main">
    <nav class="nav">1</nav>
    <header class="header">2</header>
    <div class="content">3</div>
  </div>
  <!-- <n-layout has-sider style="height: 100%">
    <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content style="top: 70px; bottom: 70px" position="absolute">
        <div style="height: 100%; background-color: red">123</div>
      </n-layout-content>
      <n-layout-footer position="absolute">成府路</n-layout-footer>
    </n-layout>
  </n-layout> -->
</template>

<script setup>
import { inject } from 'vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Main from './components/Main.vue'

const theme = inject('theme')
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  display: grid;
  grid-template-columns: v-bind('theme.sideBarWidth') 1fr;
  grid-template-rows: repeat(2, 1fr);
  .nav {
    grid-area: 1/1/3/1;
    background-color: v-bind('theme.menuBg');
  }
  .header {
    background-color: v-bind('theme.menuBg');
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
