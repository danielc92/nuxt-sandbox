<template>
  <div class="container">
    <custom-button
      :title="title"
      :paragraph="paragraph"
      @customclick="handleEmit"
    >
    </custom-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomButton from '~/components/CustomButton/CustomButton.vue'

export default Vue.extend({
  components: { CustomButton },
  data() {
    return {
      title: 'Anim quis proident .',
      paragraph:
        'Labore excepteur nostrud Lorem non culpa minim duis consequat eu minim magna minim elit incididunt.',
    }
  },
  methods: {
    handleEmit(value: any) {
      // do something with value passed from child
      console.log('Clicked', value)
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
