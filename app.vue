<template>
  <booster-layer >
    <div>{{ text }}</div>
    <button @click.native="checking">click me</button>

  </booster-layer>
</template>

<script lang="ts" setup>
import BoosterLayer from "~/BoosterLayer.vue";

const text = ref("this is testing project for nuxt booster");
const checking = () => {
  nextTick(() => {
    console.log("checkingdsf");
    text.value = "button is clicked";
  });
};
</script>
