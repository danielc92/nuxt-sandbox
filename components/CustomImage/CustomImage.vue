<template>
  <div>
    <h2>Welcome.</h2>
    <img :src="source" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    source: {
      type: String,
    },
  },
})
</script>

<style scoped>
/* d */
</style>
