<template>
  <div class="input-group">
    <label class="input-group__label" :for="$attrs.id">{{ label }}</label>
    <input
      class="input-group__input"
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

<style lang="scss">
.input-group {
  margin-bottom: 1rem;

  &__label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  &__input {
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
  }
}
</style>
