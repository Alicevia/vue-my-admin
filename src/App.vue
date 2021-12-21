<template>
  <router-view></router-view>
</template>
<script setup>
import { useMessage, useDialog } from 'naive-ui'

window.$message = useMessage()
window.$dialog = useDialog()
</script>
<style></style>
