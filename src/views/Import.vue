<script lang="ts" setup>
import { uploadTxt, parseTxt, setWordsData } from "@/utils";

const message = ref("");
const placeholder = `请输入单词文本，格式如下
单词名称
谷歌: 翻译; 有道: 翻译;
单词句子
`;

function importText() {
  const list = parseTxt(message.value);
  setWordsData(list);
}

async function uploadFile() {
  const result = await uploadTxt();
  const list = parseTxt(result);
  setWordsData(list);
}
</script>

<template>
  <van-cell-group inset class="container">
    <van-row justify="space-between" align="center">
      <div class="title">输入单词文本</div>
      <van-button size="small" type="primary" @click="importText"
        >导入文本</van-button
      >
    </van-row>
    <van-field
      v-model="message"
      rows="5"
      autosize
      type="textarea"
      :placeholder="placeholder"
      show-word-limit
      class="text"
    />
    <van-row justify="space-between" align="center">
      <div class="title">导入单词文件</div>
      <van-button size="small" icon="plus" type="primary" @click="uploadFile">
        上传文件
      </van-button>
    </van-row>
  </van-cell-group>
</template>

<style scoped lang="less">
.container {
  padding: 20px 0;

  > div {
    margin-bottom: 10px;
  }

  .title {
    font-size: 16px;
    color: rgba(69, 90, 100, 0.6);
  }

  .text {
    border: 1px solid #ddd;
    overflow-y: scroll;
    height: 150px;
  }
}
</style>
