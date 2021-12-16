<template>
  <n-dropdown trigger="hover" @select="handleSelect" :options="options">
    <n-button quaternary>{{ language }}</n-button>
  </n-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import appStore from '@/store/appStore'
import { messages } from '@/i18n'

const i18n = useI18n()
const app = appStore()
const options = computed(() =>
  Object.values(messages).map((item) => ({
    key: item.key,
    label: item.label,
    disabled: app.language == item.key,
  })),
)
const language = computed(() => messages[app.language].label)

const handleSelect = (key) => {
  if (key != app.language) {
    app.setLanguage(key)
    i18n.locale.value = key
    $message.success(i18n.t('toast.switchLangSuccess'))
  }
}
</script>
<style lang="scss" scoped></style>
