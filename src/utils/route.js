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

function getRouterMap(routes) {
  // 获取所有的子路由
  const childrenRoutes = routes.reduce((pre, item) => {
    if (item.children && item.children.length > 0) {
      pre.push(...item.children)
    }
    return pre
  }, [])
  // 反向过滤出路由表
  return routes.filter(
    (route) => !childrenRoutes.some((item) => item.name === route.name),
  )
}

export const generateMenus = (routes) => {
  const allRoutes = getRouterMap(routes)
  const result = allRoutes.reduce((pre, item) => {
    if (!['/login', '/:catchAll(.*)'].includes(item.path)) {
      if (isEmpty(item.meta) && isEmpty(item.children)) return pre
      if (isEmpty(item.meta) && !isEmpty(item.children)) {
        pre.push(...generateMenus(item.children))
        return pre
      }
      const temp = {}
      temp.icon = renderIcon(BookOutline)
      temp.label = t(`route.${item.meta.title}`)
      temp.key = item.name
      if (!isEmpty(item.children)) {
        temp.children = generateMenus(item.children)
      }
      pre.push(temp)
    }
    return pre
  }, [])
  return result
}

// {
//   label:'用户',
//   key:'用户',
//   icon:'sf',
//   children:[
//     {
//       label:'用户',
//       key:'用户',
//       icon:'sf',
//     }
//   ]
// }
