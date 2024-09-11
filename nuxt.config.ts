// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: [
    'nuxt-booster'
  ],

  runtimeConfig: {
    public: {
      disableInfoLayer: false
    }
  },
  ssr: false,

  imports: {
    autoImport: false
  },

  booster: true
})
