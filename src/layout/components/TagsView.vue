<template>
  <n-layout-content content-style="width:fit-content" :native-scrollbar="false">
    <div class="tags">
      <n-tag
        checkable
        :checked="item.fullPath == route.fullPath"
        class="item"
        :class="{ active: item.fullPath == route.fullPath }"
        v-for="(item, index) in user.tagsViewList"
        :key="item.title"
        @contextmenu.prevent="openTagContextMenu($event, index)"
      >
        <div class="content" @click="changeRoute(item)">
          <span
            v-show="item.path != '/profile'"
            :class="{ dot: true, active: item.fullPath == route.fullPath }"
          ></span>
          {{ t(`route.${item.title}`) }}
          <span
            v-show="item.path != '/profile'"
            @click.stop="handleClose(index, item)"
            :class="{ close: true, active: item.fullPath == route.fullPath }"
            >x</span
          >
        </div>
      </n-tag>
      <n-dropdown
        placement="bottom-start"
        trigger="manual"
        v-bind="tagContextMenuState"
      />
    </div>
  </n-layout-content>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import userStore from '@/store/userStore'
import appStore from '@/store/appStore'
import { ROUTE } from '@/constant'

const { t } = useI18n()
const app = appStore()
const user = userStore()
const router = useRouter()
const route = useRoute()
const changeRoute = (item) => {
  router.push(item)
}
const handleClose = (index) => {
  user.removeTagsViewItem(index, route)
}

const tagContextMenuState = reactive({
  show: false,
  options: [
    {
      label: '关闭',
      key: 'close',
    },
    {
      label: '关闭右侧',
      key: 'closeRight',
    },
    {
      label: '关闭其他',
      key: 'closeOther',
    },
  ],
  selectIndex: -1,
  x: 0,
  y: 0,
  onSelect(key) {
    tagContextMenuState.show = false
    if (key == 'close') {
      handleClose(tagContextMenuState.selectIndex, route)
      return
    }
    if (key == 'closeRight') {
      user.removeTagsRightItem(tagContextMenuState.selectIndex + 1, route)
      return
    }
    if (key == 'closeOther') {
      user.removeTagsOtherItem(tagContextMenuState.selectIndex, route)
    }
  },
  onClickoutside() {
    tagContextMenuState.show = false
  },
})
const openTagContextMenu = (e, index) => {
  const { x, y } = e
  tagContextMenuState.show = true
  tagContextMenuState.x = x
  tagContextMenuState.y = y
  tagContextMenuState.selectIndex = index
}

const tagsViewBlack = [ROUTE.LOGIN]
watch(
  route,
  (newValue) => {
    if (tagsViewBlack.includes(newValue.name)) return
    const temp = { ...newValue }
    delete temp.redirectedFrom
    temp.title = newValue.meta.title
    user.addTagsViewItem(temp)
  },
  { immediate: true },
)
</script>
<style lang="scss" scoped>
.tags {
  height: 40px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 10px;

  .item {
    margin-right: 10px;
    border: 1px solid rgb(223, 223, 223);

    .content {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        .close,
        .dot {
          opacity: 1;
          transition: opacity 0.3s;
        }
      }
      .close {
        cursor: pointer;
        opacity: 0;
        width: 15px;
        height: 15px;
        text-align: center;
        border-radius: 50%;
        &.active {
          opacity: 1;
        }
      }
      .dot {
        display: inline-block;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        margin-right: 5px;
        background-color: v-bind('app.userSelectColor.primaryColor');
        opacity: 0;
        &.active {
          opacity: 1;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
