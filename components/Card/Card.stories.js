import Card from './Card.vue'

export default {
  title: 'Card',
}

const Template = (args, { argTypes }) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: '<Card v-bind="$props"/>',
})

export const a = Template.bind({})
a.args = {
  title: 'Et aliqua labore nostrud qui nulla nisi elit cillum.',
  info:
    'Excepteur commodo sunt deserunt est do duis id. Eiusmod ullamco ullamco adipisicing esse ut qui dolore aute in minim mollit fugiat ex. Commodo ullamco laboris aliquip duis exercitation mollit esse.',
  author: 'Daniel',
  variant: 'light',
}
