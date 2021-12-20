<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button quaternary>主题</n-button>
    </template>
    <div style="height: 50px; width: 200px">
      <n-color-picker
        v-model:value="color"
        :swatches="[
          '#FFFFFF',
          '#18A058',
          '#2080F0',
          '#F0A020',
          'rgba(208, 48, 80, 1)',
        ]"
      />
    </div>
  </n-popover>
</template>

<script setup>
import { ColorPaletteOutline } from '@vicons/ionicons5'
import { ref, watch, inject, computed } from 'vue'

const theme = inject('theme')

const color = ref()
watch(color, (newColor) => {
  theme.menuBg = newColor
})
</script>
<style lang="scss" scoped></style>
