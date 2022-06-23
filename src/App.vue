<script lang="ts" setup>
import Words from "../mock/data.json";

const index = ref(0);
const word = computed(() => Words[index.value]);

const add = () => {
  if (index.value < Words.length - 1) index.value++;
  else {
    index.value = 0;
  }
};
const minus = () => {
  if (index.value > 0) index.value--;
  else {
    index.value = Words.length - 1;
  }
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.btn" @click="minus">{{ "<" }}</div>
    <Card :word="word" />
    <div :class="$style.btn" @click="add">{{ ">" }}</div>
  </div>
</template>

<style module scoped lang="less">
.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  .btn {
    margin-top: 150px;
    width: 50px;
    height: 50px;
    font-size: 35px;
    line-height: 45px;
    text-align: center;
    border-radius: 100%;
    color: #bbb;
    border: 2px solid #bbb;
    cursor: pointer;
  }
}
</style>
