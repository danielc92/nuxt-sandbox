<template>
  <div :class="getClass()">
    <h1 class="card__heading">{{ title }}</h1>
    <p class="card__info">{{ info }}</p>
    <p class="card__author">Author: {{ author }}</p>
    <Button label="learn more" @send-message="listenForChild" />
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
    variant: {
      type: String,
      default: 'light',
      validator(value) {
        return ['light', 'dark'].includes(value)
      },
    },
  },
  methods: {
    getClass() {
      return {
        card: true,
        'card--light': this.variant === 'light',
        'card--dark': this.variant === 'dark',
      }
    },
    listenForChild(event: any) {
      console.log(event)
    },
  },
})
</script>
