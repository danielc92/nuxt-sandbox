<template>
  <div>
    <button v-bind="$attrs" @click="emitClick">Click me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    emitClick(event: any) {
      this.$emit('customclick', event)
    },
  },
})
</script>
