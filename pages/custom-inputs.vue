<template>
  <div class="container">
    <custom-input v-model="firstName" :label="label1" />
    <custom-input v-model="lastName" :label="label2" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomInput from '~/components/CustomInput/CustomInput.vue'

export default Vue.extend({
  components: { CustomInput },
  data() {
    return {
      label1: 'First name',
      label2: 'Last name',
      firstName: 'John',
      lastName: 'Doe',
    }
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
