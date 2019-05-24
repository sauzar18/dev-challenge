const pkg = require('./package')
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex, nofollow' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: 'https://dev-problem.herokuapp.com/',
    credentials: false,
    browserBaseURL: process.env.BASE_APP_URL || '/',
    requestInterceptor: (config, {
      store
    }) => {
      if (store.state.csrfToken) {
        config.headers.common.Authorization = 'Bearer ' + store.state.csrfToken
        config.headers.common['x-csrf-token'] = store.state.csrfToken
      }
      return config
    }
  },
  auth: {
    strategies: {
      github: {
        client_id: '337df7b568e8f74bedf8',
        client_secret: '345e18c6f8372e91241036dcf01ee01525da7109'
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/',
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
