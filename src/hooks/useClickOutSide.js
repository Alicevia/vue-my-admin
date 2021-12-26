import { ref, onMounted, onUnmounted } from 'vue'

export function useClickOutSide(domRef) {
  const isClickOutSide = ref(false)
  const handler = (e) => {
    if (domRef.value.$el) {
      isClickOutSide.value = !domRef.value.$el.contains(e.target)
    } else {
      isClickOutSide.value = !domRef.value.contains(e.target)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return { isClickOutSide }
}
