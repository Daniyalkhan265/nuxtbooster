<template>
  <div id="app">
    <div v-if="jsLoaded">
      <!-- Your regular app content goes here -->
      <div>{{ text }}</div>
      <button @click="checking">click me</button>
      <a href="https://nuxt.com/modules" ref="link">test</a>
    </div>

    <!-- Fallback message -->
    <div v-else id="js-failure" style="color: red;">
      JavaScript/TypeScript failed to load. Please check your browser settings.
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

const text = ref("this is testing project for nuxt booster");
const jsLoaded = ref(false); // Initially set to false

// Simulate JavaScript loading by changing the flag on mount
onMounted(() => {
  jsLoaded.value = true; // JavaScript has successfully loaded
});

const checking = () => {
  text.value = "button is clicked";
};
</script>
