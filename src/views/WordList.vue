<script lang="ts" setup>
import WordList from "../../mock/data.json";
import { Dialog } from "vant";
import "vant/es/dialog/style";
import { createWordCard } from "@/utils";

const list = ref<WordItem[]>([]);
const loading = ref(false);
const finished = ref(false);
let count = 0;

const onLoad = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      if (count >= WordList.length) {
        finished.value = true;
        break;
      }
      list.value.push(WordList[count++]);
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
