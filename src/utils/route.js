import { NIcon } from 'naive-ui'
import { h } from 'vue'
import { BookOutline } from '@vicons/ionicons5'
import i18 from '@/i18n'

const { t } = i18.global

function isEmpty(data) {
  if (!data) return true
  if (JSON.stringify(data) == '{}') return true
  if (JSON.stringify(data) == '[]') return true
  return false
}

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
// 将meta内的字段拷贝到外层
function assignMeta(ary) {
  for (let index = 0; index < ary.length; index++) {
    const item = ary[index]
    if (item.meta?.icon) {
      Object.assign(item, item.meta || {})
      item.icon = renderIcon(BookOutline)
      item.title = t(`route.${item.title}`)
    } else {
      ary.splice(index, 1)
      index--
    }
  }
}
export const generateMenus = (routes) => {
  const childrenRoutes = routes.filter((item) => item.children.length > 0)

  const result = childrenRoutes.reduce((pre, item) => {
    if (item.path == '/') {
      assignMeta(item.children)
      pre.push(...item.children.filter((route) => route.meta?.icon))
    } else {
      Object.assign(item, item.meta || {})
      item.icon = renderIcon(BookOutline)
      assignMeta(item.children)
      item.title = t(`route.${item.title}`)
      pre.push(item)
    }
    return pre
  }, [])
  return result
}
