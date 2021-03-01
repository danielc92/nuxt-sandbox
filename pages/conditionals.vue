<template>
  <div class="article">
    <template v-for="(block, key) in article">
      <h1 v-if="block.node === 'heading-1'" :key="key">{{ block.content }}</h1>
      <h2 v-else-if="block.node === 'heading-2'" :key="key">
        {{ block.content }}
      </h2>
      <h3 v-else-if="block.node === 'heading-3'" :key="key">
        {{ block.content }}
      </h3>
      <h4 v-else-if="block.node === 'heading-4'" :key="key">
        {{ block.content }}
      </h4>
      <p v-else-if="block.node === 'paragraph'" :key="key">
        {{ block.content }}
      </p>
      <a
        v-else-if="block.node === 'hyperlink'"
        :key="key"
        :href="block.content.url"
      >
        {{ block.content.text }}
      </a>
      <p v-else :key="key" class="article__unknown">
        Unknown node type: {{ block.node }}
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      article: [
        { node: 'heading-1', content: 'Ro consectetur.' },
        {
          node: 'paragraph',
          content:
            'Cupidatat tempor nulla duis ut ea velit do ut. Est laboris irure nostrud sit est mollit do. Ipsum consequat pariatur deserunt voluptate. Laborum ea cillum reprehenderit et anim anim. Excepteur deserunt exercitation nulla sint aute.',
        },
        {
          node: 'paragraph',
          content:
            'Amet duis do duis sunt enim do id ea ea nisi. Exercitation excepteur sint sit ad officia proident eiusmod voluptate reprehenderit. Minim nulla aute incididunt anim. Labore ea do in occaecat excepteur minim ut cillum ut aliqua ea. Qui eiusmod eu dolore et cillum cillum cillum ipsum commodo Lorem nisi laboris qui..',
        },
        { node: 'heading-2', content: 'Ro consectetur.' },
        {
          node: 'paragraph',
          content:
            'Amet duis do duis sunt enim do id ea ea nisi. Exercitation excepteur sint sit ad officia proident eiusmod voluptate reprehenderit. Minim nulla aute incididunt anim. Labore ea do in occaecat excepteur minim ut cillum ut aliqua ea. Qui eiusmod eu dolore et cillum cillum cillum ipsum commodo Lorem nisi laboris qui..',
        },
        { node: 'heading-2', content: 'Ro consectetur.' },
        {
          node: 'paragraph',
          content:
            'Ex cillum incididunt do reprehenderit nostrud ullamco amet incididunt enim culpa nulla sint nulla. Nisi commodo cillum fugiat commodo excepteur deserunt ut et cupidatat. Incididunt ad nisi id Lorem velit labore. Labore elit minim voluptate eu incididunt laboris nostrud. Consequat anim elit non ea voluptate ex culpa Lorem consectetur officia eiusmod occaecat dolore. Et duis adipisicing excepteur amet sit dolore excepteur eu sit occaecat veniam dolor. Ad labore consectetur cupidatat veniam cupidatat.',
        },
        { node: 'heading-3', content: 'Ro consectetur.' },
        {
          node: 'heading-9',
          content: 'content',
        },
        {
          node: 'paragraph',
          content:
            'Amet duis do duis sunt enim do id ea ea nisi. Exercitation excepteur sint sit ad officia proident eiusmod voluptate reprehenderit. Minim nulla aute incididunt anim. Labore ea do in occaecat excepteur minim ut cillum ut aliqua ea. Qui eiusmod eu dolore et cillum cillum cillum ipsum commodo Lorem nisi laboris qui..',
        },
        { node: 'heading-2', content: 'Ro consectetur.' },
        {
          node: 'paragraph',
          content:
            'Amet duis do duis sunt enim do id ea ea nisi. Exercitation excepteur sint sit ad officia proident eiusmod voluptate reprehenderit. Minim nulla aute incididunt anim. Labore ea do in occaecat excepteur minim ut cillum ut aliqua ea. Qui eiusmod eu dolore et cillum cillum cillum ipsum commodo Lorem nisi laboris qui..',
        },
        {
          node: 'hyperlink',
          content: {
            text: 'visit this website now',
            url: 'https://danielcorcoranssql.wordpress.com/',
          },
        },
        {
          node: 'paragraph',
          content:
            'Anim elit proident qui consectetur tempor in laborum laborum ut nostrud mollit exercitation est. Dolore occaecat cupidatat aute deserunt cillum do. Ipsum elit ea ea proident.',
        },
      ],
    }
  },
})
</script>
