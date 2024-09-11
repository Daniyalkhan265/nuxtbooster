// https://nuxt.com/docs/api/configuration/nuxt-config
function getBuilder() {
  const builder =
      process.env.npm_config_builder || process.env.BUILDER || undefined;
  return builder === 'webpack' ? '@nuxt/webpack-builder' : undefined;
}
export default defineNuxtConfig({
    buildModules: [
        '@nuxt/typescript-build', // Enables TypeScript support in Nuxt
    ],
  modern: 'client',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    ['nuxt-booster', {
      // ... other nuxt-booster options
      preload: false
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
  builder: getBuilder(),
  build: {
    // ... other build options
    moduleOptions: {
      preloading: true
    }
  },
  nuxtBooster: true
})
