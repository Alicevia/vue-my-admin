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
<style>
body,
html,
#app,
.n-config-provider {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: pink;
}
</style>
