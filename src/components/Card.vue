<script lang="ts" setup>
const style = useCssModule();
const isTurn = ref(false);
const flipClass = computed(() => [style.flip, isTurn.value && style.turn]);

defineProps<{ word: WordItem }>();

const randDomColor = () =>
  `rgba(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255},
    0.5
  )`;

const color = randDomColor();
</script>

<template>
  <div :class="flipClass" @touchstart="isTurn = !isTurn">
    <div :class="$style.flipper">
      <div
        :class="$style.front"
        :style="{
          backgroundColor: color,
        }"
      >
        {{ word.word }}
      </div>
      <div
        :class="$style.back"
        :style="{
          backgroundColor: color,
        }"
      >
        <p v-for="item in word.translation">
          <span>{{ item.source }}: </span>
          <span>{{ item.value }}</span>
        </p>
        <p>{{ word.sentence }}</p>
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
  border-radius: 20px;

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
      padding: 20px;
      font-size: 50px;
      text-align: center;
      line-height: 260px;
    }
    .back {
      transform: rotateY(180deg);
      padding: 20px;
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
