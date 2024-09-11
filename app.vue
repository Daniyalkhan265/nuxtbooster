<template>
  <div>{{ text }}</div>
  <button @click="() => { text = 'button is clicked'; console.log('checkingdsf'); }">click me</button>
  <a href="https://nuxt.com/modules" ref="link">test</a>
</template>

<script lang="ts" setup defer>
import { ref, nextTick } from 'vue';
const text = ref("this is testing project for nuxt booster");
// const checking = () => {
//   nextTick(() => {
//     console.log("checkingdsf");
//     text.value = "button is clicked";
//   });
// };
</script>
