<template>
  <div>{{ text }}</div>
  <button @click="checking">click me</button>
  <span ref="https://nuxt.com/modules">test</span>
  <a href="https://nuxt.com/modules" ref="https://nuxt.com/modules">test</a>
</template>

<script lang="ts" setup defer>
import { ref, nextTick } from 'vue';
const text = ref("this is testing project for nuxt booster");
const checking = () => {
  nextTick(() => {
    console.log("checkingdsf");
    text.value = "button is clicked";
  });
};
</script>
