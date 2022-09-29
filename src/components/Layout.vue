<script lang="ts" setup>
const route = useRoute();
const title = computed(() => route.meta.title as string);

const leftText = computed(() =>
  ["/home", "/about"].includes(route.path) ? "" : "返回"
);
</script>

<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow="!!leftText"
    @click-left="$router.back()"
  />
  <div class="content-container">
    <router-view />
  </div>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="less">
.content-container {
  height: calc(100% - 96px);
  overflow-y: auto;
}
</style>
