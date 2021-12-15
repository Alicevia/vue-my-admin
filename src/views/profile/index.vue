<template>
  <div class="profile">
    <n-pagination :page-count="100" show-size-picker />
    <div>{{ $t('navBar.logout') }}</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.profile {
  background-color: rgb(87, 147, 236);
  height: 100%;
  overflow-y: auto;
}
</style>
