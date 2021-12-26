<template>
  <n-layout style="height: 100%">
    <n-layout position="absolute" has-sider>
      <SideBar></SideBar>
      <n-layout>
        <NavBar></NavBar>
        <TagsView></TagsView>
        <div style="position: absolute; top: 90px; width: 100%; height: 100%">
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
import TagsView from './components/TagsView.vue'
</script>
<style lang="scss" scoped></style>
