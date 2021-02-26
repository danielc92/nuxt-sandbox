<template>
  <div class="container">
    <Card
      title="Tiger"
      info="Dolore cillum voluptate nostrud duis labore. Voluptate sunt qui cupidatat ullamco occaecat reprehenderit excepteur tempor nisi laboris eiusmod irure eu. Et excepteur culpa id esse nisi pariatur quis aliquip enim minim. Aliquip velit ad esse ea excepteur deserunt in in. Cillum quis esse irure officia sunt do officia non ipsum."
      author="Daniel C"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
body,
html {
  font-size: 16px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
