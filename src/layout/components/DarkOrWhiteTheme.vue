<template>
  <n-button quaternary @click="app.toggleBlackOrWhite">{{
    app.myTheme ? '深色' : '浅色'
  }}</n-button>
</template>

<script setup>
import appStore from '@/store/appStore'

const app = appStore()
</script>
<style lang="scss" scoped></style>
