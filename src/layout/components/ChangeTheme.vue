<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button quaternary>主题</n-button>
    </template>
    <ul style="height: 50px; width: 200px">
      <li v-for="(item, key) in app.userSelectColor" :key="key">
        <p style="margin-bottom: 5px">{{ key }}:</p>
        <n-color-picker
          :value="item"
          @update:value="app.changeUserThemeColor(key, $event)"
          :swatches="[
            '#FFFFFF',
            '#18A058',
            '#2080F0',
            '#F0A020',
            'rgba(208, 48, 80, 1)',
          ]"
        />
      </li>
    </ul>
    <div style="text-align: center; margin-top: 10px">
      <n-button size="small" @click="openSaveThemeDialog"
        >保存当前主题</n-button
      >
    </div>
  </n-popover>
</template>

<script setup>
import appStore from '@/store/appStore'
import { USER_THEME_OVERRIDES } from '@/constant'

const app = appStore()
const openSaveThemeDialog = () => {
  app.saveUserThemeColor(USER_THEME_OVERRIDES)
  $message.success('保存成功')
}
</script>
<style lang="scss" scoped></style>
