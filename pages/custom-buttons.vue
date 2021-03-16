<template>
  <div class="container">
    <h1>Custom buttons</h1>
    <p>
      Listens for a custom event sent up from a child component with a button.
    </p>
    <custom-button @customclick="handleEmit">Click me</custom-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomButton from '~/components/CustomButton/CustomButton.vue'

export default Vue.extend({
  components: { CustomButton },
  methods: {
    handleEmit(value) {
      alert('Ive been clicked')
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  padding-top: 2rem;
  min-height: 100vh;
  max-width: 800px;
}
</style>
