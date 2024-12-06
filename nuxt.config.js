export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs_app',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~plugins/vuesax.js' },
    { src: '~/plugins/paypal.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-buefy',
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8080/api'
  },

  auth: {
    strategies: {
      github: {
        clientId: '851b388e80dedb4b2329',
        clientSecret: '86f720ec46c2c05540b5037b19ccfe614816f361',
        scope: ['read:user', 'user:email'],
        // url: 'http://127.0.0.1:8000',
        // endpoints: {
        //   login: {
        //     url: '/connect/github'
        //   }
        // },
        // redirectUri: '/',
      },
      local: {
        endpoints: {
          login: { url: 'token', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      },
      google: {
        clientId: '150085811778-n0ppee57cfcustdt2drps787de8trkh9.apps.googleusercontent.com',
        scope: ['profile', 'email'],
        responseType: 'code',
        codeChallengeMethod: '',
        grantType: 'authorization_code',
        clientSecret: 'T0tjNiJnu82sYkhSQu6YOgkL',
      }
    }
  },

  // buefy: { 
  //   css: false 
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
