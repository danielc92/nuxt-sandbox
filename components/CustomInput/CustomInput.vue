<template>
  <div>
    <label :for="$attrs.id">{{ label }}</label>
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: String,
    label: String,
  },
})
</script>
