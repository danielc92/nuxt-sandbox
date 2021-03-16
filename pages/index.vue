<template>
  <div id="home">
    <h1>Dan's Nuxt App</h1>
    <p>A sandbox environment to learn Nuxtjs fundamentals and module system.</p>
    <p>Pages are listed below, each one explores particular concept(s).</p>
    <ul>
      <li>
        <nuxt-link to="/conditionals">Conditionals</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/charts">Charts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/custom-inputs">Custom events with inputs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/custom-buttons">Custom events with buttons</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/new-layout-test">Custom layouts</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/todos">Rendering RestAPI data</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/apollo">Rendering GraphQL data</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/images">Images</nuxt-link>
      </li>
      <li>
        <a href="/sitemap.xml">Sitemap generation</a>
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
