import { provide } from 'vue'
import variables from '@/style/export.module.css'

export function useMyTheme() {
  const theme = {}
  Object.defineProperties(
    theme,
    Object.keys(variables).reduce((pre, key) => {
      pre[key] = {
        get() {
          return variables[key]
        },
        set(value) {
          document.documentElement.style.setProperty(`--${key}`, value)
        },
      }
      return pre
    }, {}),
  )
  provide('theme', theme)
  return { theme }
}
