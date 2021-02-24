<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
@import "./styles/base.scss";
@import "./styles/app.scss";
</style>
