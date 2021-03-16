<template>
  <div class="container">
    <h1>Images page</h1>
    <p>Renders images from <code>static</code></p>
    <img class="image" src="/mountain.jpg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.image {
  max-width: 500px;
  height: auto;
}
.container {
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
}
</style>
