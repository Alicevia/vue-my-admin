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
  inputDark,
  datePickerDark,
  NConfigProvider,
  NInput,
  NDatePicker,
  NSpace,
  zhCN,
  dateZhCN,
  NMessageProvider,
} from 'naive-ui'

const darkTheme = createTheme([])
</script>
<style></style>
