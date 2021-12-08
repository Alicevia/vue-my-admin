<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup>
import {
  createTheme,
  NConfigProvider,
  zhCN,
  dateZhCN,
  NMessageProvider,
} from 'naive-ui'
import { useMyTheme } from './func/theme'

useMyTheme()

const darkTheme = createTheme([])
</script>
<style></style>
