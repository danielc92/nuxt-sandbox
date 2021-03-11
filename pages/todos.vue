<template>
  <div class="container">
    <h1>Todos</h1>
    <p>Mock todos from jsonplaceholder</p>
    <div
      v-for="t in todos"
      :key="t.id"
      class="todo"
      :class="{ 'todo--completed': t.completed }"
    >
      <h3>{{ t.id }} - {{ t.title }}</h3>
      <p>By user: {{ t.userId }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      todos: [],
    }
  },
  async fetch() {
    this.todos = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    ).then((response) => response.json())
  },
})
</script>

<style lang="scss">
.container {
  max-width: 760px;
  margin: 0 auto;
}

.todo {
  color: white;
  background: rgb(202, 53, 53);
  border: 2px solid #f2f2f2;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  &--completed {
    background: rgb(47, 172, 47);
  }
}
</style>
