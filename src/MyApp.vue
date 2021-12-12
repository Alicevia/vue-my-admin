<template>
  <n-config-provider :theme="null" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <App></App>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import App from './App.vue'
import { useMyTheme } from './hooks/theme'

useMyTheme()
</script>
<style lang="scss" scoped></style>
