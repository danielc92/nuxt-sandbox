<template>
  <button class="button ripple" @click="emitValue">
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: 'Click me',
    },
  },
  data() {
    return {
      secretFromChild: 'The password is 123',
    }
  },
  methods: {
    emitValue() {
      this.$emit('send-message', this.secretFromChild)
    },
  },
})
</script>
