<script lang="ts" setup>
import { Dialog } from "vant";
import "vant/es/dialog/style";
import { createWordCard } from "@/utils";
import axios from "axios";

const wordList = ref<WordItem[]>([]);
const list = ref<WordItem[]>([]);
const loading = ref(false);
const finished = ref(false);
let count = 0;

onMounted(() => {
  axios.get("/data.json").then((res) => {
    wordList.value = res.data;
  });
});

const onLoad = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      if (count >= wordList.value.length) {
        finished.value = true;
        break;
      }
      list.value.push(wordList.value[count++]);
    }
    loading.value = false;
  }, 200);
};

function onShowDetail(item: WordItem) {
  Dialog.alert({
    title: item.word,
    message: () => createWordCard(item),
  });
}
</script>

<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="item in list"
      :key="item.word"
      :title="item.word"
      @click="onShowDetail(item)"
    />
  </van-list>
</template>

<style>
.l {
  justify-content: space-between;
}
</style>
