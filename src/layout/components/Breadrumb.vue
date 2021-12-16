<template>
  <n-breadcrumb class="breadcrumb">
    <transition-group name="breadcrumb">
      <n-breadcrumb-item
        @click="handleClick(item)"
        v-for="item in breadcrumbState.list"
        :key="item.path"
      >
        {{ $t(`route.${item.meta.title}`) }}
      </n-breadcrumb-item>
    </transition-group>
  </n-breadcrumb>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbState = reactive({
  list: [],
})
const handleClick = (item) => {
  router.push({ path: item.path })
}
watch(
  route,
  (newValue) => {
    breadcrumbState.list = route.matched.filter(
      (item) => item.meta && item.meta.icon,
    )
  },
  { immediate: true },
)
</script>
<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(25px);
}
.breadcrumb-leave-active {
  position: absolute;
}

.breadcrumb {
  margin-left: 20px;
}
</style>
