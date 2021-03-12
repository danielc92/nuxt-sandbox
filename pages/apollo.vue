<template>
  <div class="container">
    <h1>Graphql Page</h1>
    <input v-model="searchText" type="text" />
    <button @click="callQuery">Search</button>
    <div v-if="response">
      <p>Number of results: {{ response.books.count }}</p>
      <ul>
        <li v-for="(book, ind) in response.books.results" :key="ind">
          <b>{{ book.title }}</b> - Written by {{ book.author }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'

export default Vue.extend({
  props: {
    searchText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      response: null,
    }
  },
  methods: {
    callQuery() {
      const BOOK_QUERY = gql`
        query BOOK_QUERY($query: String) {
          books(query: $query) {
            results {
              title
              author
            }
            count
          }
        }
      `

      const variables = {
        query: this.searchText,
      }

      const client = this.$apollo.getClient()

      this.$apollo.query({ query: BOOK_QUERY, variables }).then(({ data }) => {
        console.log(data, 'this is data')
        this.response = data
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
input {
  padding: 10px;
  font-size: 16px;
}
button {
  padding: 10px 16px;
  font-size: 16px;
}

p {
  font-size: 16px;
  margin: 24px 0;
}

li {
  font-size: 16px;
  margin-bottom: 12px;
}
</style>
