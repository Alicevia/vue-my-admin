<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button quaternary>主题</n-button>
    </template>
    <div style="height: 50px; width: 200px">
      <n-color-picker
        v-model:value="colorRef"
        :swatches="[
          '#FFFFFF',
          '#18A058',
          '#2080F0',
          '#F0A020',
          'rgba(208, 48, 80, 1)',
        ]"
      />
    </div>
    <div style="text-align: center">
      <n-button size="small" @click="openSaveThemeDialog"
        >保存当前主题</n-button
      >
    </div>
  </n-popover>
</template>

<script setup>
import { ref, watch, inject, computed, h } from 'vue'
import { NInput } from 'naive-ui'
import appStore from '@/store/appStore'

const app = appStore()
const themeValue = ref()
const { $dialog } = window
const openSaveThemeDialog = () => {
  $dialog.warning({
    title: '主题保存',
    content: () =>
      h(NInput, {
        'onUpdate:value': function (value) {
          themeValue.value = value
        },
      }),
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      app.saveUserThemeColor(themeValue.value)
    },
    onNegativeClick: () => {
      $message.error('不确定')
    },
  })
}

const colorRef = ref()
watch(colorRef, (newColor) => {
  console.log('xx')
  app.changeUserThemeColor(newColor)
})
</script>
<style lang="scss" scoped></style>
