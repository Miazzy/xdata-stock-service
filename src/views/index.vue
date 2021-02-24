<template>
  <router-view class="router-view" />
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
/*切换样式出错处理*/
.router-view {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>
