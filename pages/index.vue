<template>
  <div id="home">
    <h1>Dan's Nuxt App</h1>
    <p>Pages are listed below</p>
    <ul>
      <li>
        <nuxt-link to="/conditionals">Conditionals</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/custom-inputs">Custom Inputs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/new-layout-test">Custom layouts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/todos">Apollo page</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/apollo">Apollo page</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
#home {
  padding-top: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
