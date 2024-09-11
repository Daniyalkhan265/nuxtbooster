// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: [
    ['nuxt-booster', {
      // ... other nuxt-booster options
    ssr: false,
    }]
  ],
  runtimeConfig: {
    public: {
      disableInfoLayer: false
    }
  },
  ssr: true,

  imports: {
    autoImport: false
  },

  nuxtBooster: true
})
