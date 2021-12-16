<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-icon size="20">
        <ColorPaletteOutline style="color: hotpink"></ColorPaletteOutline>
      </n-icon>
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
  <!-- <n-popselect v-model:value="color" width="trigger">
 
    <n-color-picker
      
    />
  </n-popselect> -->
  <!-- <n-popover :style="{ width: '100px' }" width="trigger">
    <template #trigger>
     
    </template>
    <div>
      
    </div>
  </n-popover> -->
</template>

<script setup>
import { ColorPaletteOutline } from '@vicons/ionicons5'
import { ref, watch, inject } from 'vue'

const theme = inject('theme')
console.log(theme)

const color = ref()
watch(color, (newColor) => {
  theme.menuBg = newColor
})
</script>
<style lang="scss" scoped></style>
