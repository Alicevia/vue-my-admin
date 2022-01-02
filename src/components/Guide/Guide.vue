<template>
  <div @click="startDriver" class="guide" id="guide-start">
    <n-icon size="20">
      <AirplaneOutline></AirplaneOutline>
    </n-icon>
  </div>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import { AirplaneOutline } from '@vicons/ionicons5'
import { steps } from './steps'

const { t } = useI18n()
let driver

const startDriver = () => {
  driver = new Driver({
    allowClose: false,
    closeBtnText: t('guide.close'),
    nextBtnText: t('guide.next'),
    prevBtnText: t('guide.prev'),
  })
  driver.defineSteps(steps(t))
  driver.start()
}
</script>
<style lang="scss" scoped>
.guide {
  margin-right: 15px;
  cursor: pointer;
}
</style>
