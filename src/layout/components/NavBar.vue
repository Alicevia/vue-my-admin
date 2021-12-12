<template>
  <n-layout-header>
    <div class="user-center">
      <div class="left"></div>
      <div class="right">
        <div class="avatar">
          <n-dropdown @select="handleSelect" :options="options">
            <n-avatar :size="40" :src="userInfo.avatar" />
          </n-dropdown>
        </div>
      </div>
    </div>
  </n-layout-header>
</template>

<script setup>
import { computed } from 'vue'
import useUser from '@/store/user'

const user = useUser()
const userInfo = computed(() => user.userInfo)

const options = [
  {
    key: '/',
    label: '首页',
  },
  {
    key: 'header-divider',
    type: 'divider',
  },

  {
    label: '课程主页',
    key: 'editProfile',
  },
  {
    label: '退出登录',
    key: 'logout',
  },
]
const handleSelect = (key) => {
  if (key == 'logout') {
    user.logout()
  }
}
</script>
<style lang="scss" scoped>
.user-center {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .right {
    .avatar {
      margin-right: 30px;
    }
  }
}
</style>
