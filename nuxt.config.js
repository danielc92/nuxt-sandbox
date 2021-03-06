export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daniels-nuxt-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/_main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Toast config
  toast: {
    position: 'top-right',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },
  // Storybook config
  storybook: {
    addons: ['@storybook/addon-a11y', '@storybook/addon-controls'],
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3002/graphql',
      },
    },
  },

  // Sitemap config
  sitemap: {
    gzip: true,
    hostname: 'https://danielc92.github.io/nuxt-sandbox/',
  },

  styleResources: {
    scss: ['~/assets/_colors.scss'],
  },

  // Static config for gh-pages
  target: 'static',
  router: {
    base: '/',
    // Use this when building
    // base: '/nuxt-sandbox/',
  },
}
