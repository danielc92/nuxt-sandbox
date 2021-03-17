<template>
  <div class="container">
    <h1>Toasts</h1>
    <button
      @click="
        $toast.error('Something went wrong, looks like an error!', {
          position: 'top-right',
          duration: 3000,
        })
      "
    >
      Trigger error toast
    </button>
    <button
      @click="
        $toast.success('Success', {
          theme: 'toasted-primary',
          position: 'top-right',
          duration: 3000,
        })
      "
    >
      Trigger success toast
    </button>
    <button
      @click="
        $toast.success('Success', {
          theme: 'toasted-primary',
          position: 'top-right',
          duration: null,
        })
      "
    >
      Trigger infinite toast
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.toasted.toasted-primary {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1.4rem 1.2rem;
}

.toasted.error {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1.4rem 1.2rem;
}
</style>
