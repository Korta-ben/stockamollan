export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiSecret: process.env.API_SECRET
  },
  privateRuntimeConfig: {

  },

  head: {
    title: 'stockamollan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/tailwind.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick-carousel.js' }
  ],



  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/blocks',
      '~/components/landmarks',
      '~/components/sagner'
    ]},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'

  ],
  googleFonts: {
    families: {
      Montserrat:
        { wght: [100,200,300,400,500,600,700,800] },
      Lora:  { wght: [100,200,300,400,500,600,700,800] },
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.stockamollan.guide/wp-json/wp/v2/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
