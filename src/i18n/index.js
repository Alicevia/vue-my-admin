import { createI18n } from 'vue-i18n'
import { LANG, DEFAULT_LANG } from '@/constant'
import { getItem } from '@/utils/storage'

const modules = import.meta.globEager('./*.js')
const messages = Reflect.ownKeys(modules).reduce((pre, item) => {
  const temp = modules[item].default
  pre[temp.key] = temp
  return pre
}, {})

const locale = getItem(LANG) || DEFAULT_LANG
const i18 = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages,
})
export { messages }
export default i18
