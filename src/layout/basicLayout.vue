<template>
  <n-layout style="height: 100%" has-sider>
    <SideBar></SideBar>
    <n-layout-content>
      <NavBar></NavBar>
      <TagsView></TagsView>
      <n-layout-content style="top: 90px; bottom: 50px" position="absolute">
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.path"></component>
            </keep-alive>
          </transition>
        </router-view>
      </n-layout-content>
      <Footer></Footer>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import TagsView from './components/TagsView.vue'
import Footer from './components/Footer.vue'
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
