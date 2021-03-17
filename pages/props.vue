<template>
  <div class="container">
    <h1>Passing and validating component props</h1>
    <card
      title="Card title"
      info="Et aliqua dolore consequat esse sint proident nulla veniam exercitation consectetur."
      author="Lorem Ipsum"
    ></card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/Card/Card.vue'

export default Vue.extend({ components: { Card } })
</script>
