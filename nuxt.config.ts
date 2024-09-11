// https://nuxt.com/docs/api/configuration/nuxt-config
import boosterModule from 'nuxt-booster';

export default defineNuxtConfig({

  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      disableInfoLayer: false
    }
  },
  ssr: true,

  imports: {
    autoImport: false
  },
  build: {
    // ... other build options
    moduleOptions: {
      preloading: true
    }
  },
  hooks: {
    'modules:before': () => {
      // Initialize the nuxt-booster module
      boosterModule();
    }
  }
})
