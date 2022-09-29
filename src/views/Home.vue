<script lang="ts" setup>
import WordList from "../../public/data.json";
import { TransSource } from "@/constants";

const isTrans = ref(false);
const count = ref(0);
const word = computed(() => WordList[count.value]);

const last = () => {
  if (count.value == 0) count.value = WordList.length - 1;
  else count.value--;
  isTrans.value = false;
};

const next = () => {
  if (count.value >= WordList.length) count.value = 0;
  else count.value++;
  isTrans.value = false;
};

const remember = () => {};
const indistinct = () => {};
const forget = () => {};
</script>

<template>
  <div class="content">
    <div class="word" v-if="!isTrans">
      <span @click="isTrans = true"> {{ word.word }}</span>
    </div>
    <div class="trans" v-else @click="isTrans = false">
      <div v-for="item in word.translation">
        <span style="margin-right: 10px">
          {{ TransSource[item.source] || item.source }}:
        </span>
        <span>{{ item.value }}</span>
      </div>
      <div>
        <span style="margin-right: 10px">原句:</span>
        {{ word.sentence }}
      </div>
    </div>
  </div>
  <van-row justify="center">
    <van-space>
      <van-button size="small" type="primary" @click="last"> last </van-button>
      <van-button size="small" type="primary" @click="remember">
        remember
      </van-button>
      <van-button size="small" type="primary" @click="indistinct">
        indistinct
      </van-button>
      <van-button size="small" type="primary" @click="forget">
        forget
      </van-button>
      <van-button size="small" type="primary" @click="next"> next </van-button>
    </van-space>
  </van-row>
</template>

<style scoped lang="less">
.content {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  color: #333;

  .word {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    font-size: 50px;
  }

  .trans {
    padding: 20px;
    min-height: 260px;
    font-size: 18px;

    > div {
      margin-bottom: 10px;
    }
  }
}
</style>
