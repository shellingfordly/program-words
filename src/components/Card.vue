<script lang="ts" setup>
import { WordItem } from "@/types";

const style = useCssModule();
const isTurn = ref(false);
const flipClass = computed(() => [style.flip, isTurn.value && style.turn]);

defineProps<{ word: WordItem }>();
</script>

<template>
  <div :class="flipClass" @touchstart="isTurn = !isTurn">
    <div :class="$style.flipper">
      <div :class="$style.front">{{ word.word }}</div>
      <div :class="$style.back">
        <p v-for="item in word.translation">
          <span>{{ item.source }}: </span>
          <span>{{ item.value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="less">
.flip {
  width: 200px;
  height: 300px;
  perspective: 1000;
  overflow: hidden;

  &.turn .flipper {
    transform: rotateY(180deg);
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;

    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .front {
      z-index: 2;
      background-color: aquamarine;
      padding: 20px;
    }
    .back {
      transform: rotateY(180deg);
      padding: 20px;
      background-color: darkgoldenrod;
    }
  }
}
</style>
