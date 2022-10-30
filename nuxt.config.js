require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt.js starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: 'Đặng Văn Nghĩa' },
      { hid: 'og:title', property: 'og:title', content: 'Đặng Văn Nghĩa' },
      { hid: 'og:url', property: 'og:url', content: process.env.NUXT_ENV_WEB_URL },
      { hid: 'og:description', property: 'og:description', content: 'Đặng Văn Nghĩa' },
      { hid: 'og:image', property: 'og:image', content: '/icon.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }]
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [
    '@/assets/app.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [
    '@/plugins/api',
    '@/plugins/axios',
    { src: '@/plugins/helper.js' },
    { src: '@/plugins/bootstrap.client.js' },
    { src: '@/plugins/helper.js' }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.NUXT_ENV_BASE_DEV
  },
  i18n: {
    langDir: 'lang/',
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en/index.js', dir: 'ltr' },
      { code: 'vi', name: 'VietNam', iso: 'vi-VN', file: 'vi/index.js', dir: 'ltr' }
    ],
    defaultLocale: 'vi',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: 'vi',
      redirectOn: 'root',
      useCookie: true,
      cookieAge: 365,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        },
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'general',
        maxSize: 256000
      }
    },
    babel: {
      compact: true
    }
  },
  server: {
    port: process.env.NUXT_ENV_BASE_PORT
  },
  router: {
    // middleware: ['auth']
  }
}
