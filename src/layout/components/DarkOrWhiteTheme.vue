<template>
  <n-dropdown @select="toggleTheme" trigger="hover" :options="themeList">
    <n-button quaternary>{{ currentTheme.label }}</n-button>
  </n-dropdown>
  <!-- <n-button
    
    @click="app.toggleBlackOrWhite(app.myTheme || darkTheme)"
    >{{ app.myTheme ? '深色' : '浅色' }}</n-button
  > -->
</template>

<script setup>
import { computed } from 'vue'
import appStore from '@/store/appStore'

const app = appStore()
const currentTheme = computed(() => app.currentTheme)
const themeList = computed(() =>
  app.themeList.map((item) => ({
    ...item,
    disabled: currentTheme.value.label == item.label,
  })),
)

const toggleTheme = (_, b) => {
  app.changeTheme(b)
}
</script>
<style lang="scss" scoped></style>
