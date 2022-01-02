<template>
  <div class="header-search" ref="selectRef">
    <n-icon class="icon" size="20" :depth="1">
      <SearchOutline
        @click="headerSearch.toggleSelect(!headerSearch.visible)"
      ></SearchOutline>
    </n-icon>
    <n-select
      class="search"
      :class="{ hide: headerSearch.visible }"
      placeholder="轻松搜索"
      v-bind="selectState"
    >
    </n-select>
  </div>
</template>

<script setup>
import { SearchOutline } from '@vicons/ionicons5'
import { computed, reactive } from 'vue'
import Fuse from 'fuse.js'
import { useRouter } from 'vue-router'
import userStore from '@/store/userStore'

const router = useRouter()
const user = userStore()

function generateSearchList(routes, title) {
  return routes.reduce((pre, item) => {
    pre.push({
      path: item.path,
      title: title ? [title, item.title] : [item.title],
      name: item.name,
    })
    if (item.children && item.children.length > 0) {
      pre.push(...generateSearchList(item.children, item.title))
    }
    return pre
  }, [])
}
// 搜索列表
const searchState = reactive({
  list: computed(() => generateSearchList(user.menuList)),
  fuse: computed(
    () =>
      new Fuse(searchState.list, {
        shouldSort: true,
        minMatchCharLength: 1,
        keys: [
          { name: 'title', weight: 0.7 },
          { name: 'path', weight: 0.3 },
        ],
      }),
  ),
})
// 搜索字段
const selectState = reactive({
  value: '',
  onSearch(value) {
    selectState.value = value
  },
  'onUpdate:value': function (value) {
    console.log(value)
    router.push({ name: value })
  },
  filterable: true,
  remote: true,
  virtualScroll: false,
  options: computed(() =>
    searchState.fuse.search(selectState.value).map(({ item }) => {
      console.log(item)
      return {
        label:
          item.title.length > 1 ? item.title.join('->') : item.title.toString(),
        value: item.name,
      }
    }),
  ),
})

// 搜索显示控制
const headerSearch = reactive({
  visible: true,
  toggleSelect(value) {
    headerSearch.visible = value
    if (value) {
      selectState.value = ''
    }
  },
})
</script>
<style lang="scss" scoped>
.header-search {
  display: flex;
  align-items: center;
  overflow: hidden;
  .icon {
    width: 20px;
    cursor: pointer;
  }
  .search {
    margin-left: 10px;
    width: 200px;
    transition: width 0.3s;
    opacity: 1;
    overflow: hidden;
    &.hide {
      width: 0px;
      opacity: 0;
      margin-left: 0px;
    }
  }
}
</style>
