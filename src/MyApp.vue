<template>
  <n-config-provider
    :locale="localeState.locale"
    :date-locale="localeState.dateLocale"
    :themeOverrides="themeOverrides"
    :theme="currentTheme.key"
  >
    <n-dialog-provider>
      <n-message-provider>
        <App></App>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { computed } from 'vue'
import App from './App.vue'
import { useMyTheme } from './hooks/theme'
import appStore from './store/appStore'

const { theme } = useMyTheme()
const app = appStore()
const currentTheme = computed(() => app.currentTheme)

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
const themeOverrides = computed(() => app.userThemeOverrides)
</script>
<style lang="scss" scoped></style>
