<template>
  <div>{{ text }}</div>
  <button @click.native="checking">click me</button>
</template>

<script lang="ts" setup>
const text = ref("this is testing project for nuxt booster");
const checking = () => {
  nextTick(() => {
    console.log("checkingdsf");
    text.value = "button is clicked";
  });
};
</script>
