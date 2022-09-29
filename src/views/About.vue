<script lang="ts" setup>
import AvatarSvg from "@/assets/avatar.svg";

const user: any = {};
const avatar = computed(() => user.headimgurl || AvatarSvg);
</script>

<template>
  <div class="header">
    <van-image class="avatar" :src="avatar" />
    <div class="name">
      <span v-if="user.name">{{ user.name }}</span>
      <span v-else>登录/注册</span>
    </div>
  </div>

  <van-list class="list">
    <van-cell @click="$router.push('/list')">
      <img class="icon" src="@/assets/word_list.svg" />
      <span class="name">我的单词</span>
    </van-cell>
    <van-cell @click="$router.push('/import')">
      <img class="icon" src="@/assets/import.svg" />
      <span class="name">导入单词</span>
    </van-cell>
  </van-list>
</template>

<style scoped lang="less">
.header {
  display: flex;
  padding: 20px;

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
  }
  .name {
    font-size: 25px;
    font-weight: 700;
    line-height: 60px;
    margin-left: 20px;
  }
}
.list {
  :deep(.van-cell__value) {
    display: flex;
    align-items: center;

    .icon {
      width: 20px;
      margin-right: 10px;
    }

    .name {
      font-size: 18px;
    }
  }
}
</style>
