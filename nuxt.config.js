export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client-server',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    
  ],

  plugins: [

  ],

  components: true,

  target: 'server',

  buildModules: [
    '@nuxtjs/eslint-module'
],

  serverMiddleware: {
    '/server': '~/server'
  },

  modules: [
    '@nuxt/http'
  ],

  axios: {

  },

  build: {

  },
}
