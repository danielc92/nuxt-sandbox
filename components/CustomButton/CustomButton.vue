<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ paragraph }}</p>
    <button v-bind="$attrs" @click="emitClick">Click me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: 'default title',
    },
    paragraph: {
      type: String,
      default: 'default paragraph',
    },
  },
  methods: {
    emitClick(event: any) {
      this.$emit('customclick', event)
    },
  },
})
</script>
