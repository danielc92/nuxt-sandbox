import CustomImage from './CustomImage.vue'

export default {
  title: 'CustomImage',
}

const Template = (args, { argTypes }) => ({
  components: { CustomImage },
  props: Object.keys(argTypes),
  template: '<CustomImage v-bind="$props"/>',
})

export const Basic = Template.bind({})
Basic.args = {
  source: '/mountain.jpg',
}
