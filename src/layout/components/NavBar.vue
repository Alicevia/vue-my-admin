<template>
  <n-layout-header bordered style="height: 50px">
    <div class="user-center">
      <div class="left">
        <Breadrumb></Breadrumb>
      </div>
      <div class="right">
        <Guide></Guide>
        <HeaderSearch></HeaderSearch>
        <ChangeTheme></ChangeTheme>
        <DarkOrWhiteTheme></DarkOrWhiteTheme>
        <LangSelect></LangSelect>
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
import { useI18n } from 'vue-i18n'
import useUser from '@/store/userStore'
import Breadrumb from './Breadrumb.vue'
import LangSelect from '@/components/LangSelect/LangSelect.vue'
import ChangeTheme from './ChangeTheme.vue'
import DarkOrWhiteTheme from './DarkOrWhiteTheme.vue'
import HeaderSearch from './HeaderSearch.vue'
import Guide from '@/components/Guide/Guide.vue'

const { t } = useI18n()

const user = useUser()
const userInfo = computed(() => user.userInfo)

const options = computed(() => [
  {
    key: '/',
    label: t('navBar.home'),
  },
  {
    key: 'header-divider',
    type: 'divider',
  },

  {
    label: t('navBar.course'),
    key: 'editProfile',
  },
  {
    label: t('navBar.logout'),
    key: 'logout',
  },
])
const handleSelect = (key) => {
  if (key == 'logout') {
    user.logout()
  }
}
</script>
<style lang="scss" scoped>
.user-center {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 1px 1px 1px rgb(223, 223, 223); */

  .right {
    display: flex;
    align-items: center;

    .avatar {
      margin-right: 30px;
      margin-left: 10px;
    }
  }
}
</style>
