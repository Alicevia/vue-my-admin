import { createI18n } from 'vue-i18n'

const modules = import.meta.globEager('./*.js')
const messages = Reflect.ownKeys(modules).reduce((pre, item) => {
  const temp = modules[item].default
  pre[temp.key] = temp
  return pre
}, {})
const locale = 'zhCN'
const i18 = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages,
})
export { messages }
export default i18
