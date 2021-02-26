<template>
  <div class="card">
    <h1 class="card__heading">{{ title }}</h1>
    <p class="card__info">{{ info }}</p>
    <p class="card__author">Author: {{ author }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
/* stored in assets/styles/card.scss */
</style>
