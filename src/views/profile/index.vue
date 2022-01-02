<template>
  <div class="content">
    <div class="top"></div>
    <div class="bottom">
      <n-layout-content
        style="height: 100%; background-color: rgb(248, 88, 88)"
        :native-scrollbar="false"
      >
        <div style="height: 1100px"></div>
      </n-layout-content>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content {
  height: 100%;
  flex-flow: column nowrap;
  display: flex;
  .top {
    flex-shrink: 0;
    height: 200px;
    background-color: gray;
  }
  .bottom {
    overflow: hidden;
    flex-grow: 1;
  }
}
</style>
