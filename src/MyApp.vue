<template>
  <n-config-provider
    :locale="localeState.locale"
    :date-locale="localeState.dateLocale"
    :themeOverrides="themeOverrides"
    :theme="myTheme"
  >
    <n-message-provider>
      <App></App>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN, enUS, dateEnUS, useOsTheme } from 'naive-ui'
import { computed } from 'vue'
import App from './App.vue'
import { useMyTheme } from './hooks/theme'
import appStore from './store/appStore'

const { theme } = useMyTheme()
const app = appStore()
const myTheme = computed(() => app.myTheme)

const localeMap = {
  zhCN: {
    locale: zhCN,
    dateLocale: dateZhCN,
  },
  enUS: {
    locale: enUS,
    dateLocale: dateEnUS,
  },
}

const localeState = computed(() => localeMap[app.language])
const themeOverrides = {
  Avatar: {
    color: 'transparent',
  },
}

const osThemeRef = useOsTheme()
</script>
<style lang="scss" scoped></style>
