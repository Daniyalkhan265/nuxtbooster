// https://nuxt.com/docs/api/configuration/nuxt-config
function getBuilder() {
  const builder =
      process.env.npm_config_builder || process.env.BUILDER || undefined;
  return builder === 'webpack' ? '@nuxt/webpack-builder' : undefined;
}
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      disableInfoLayer: false
    }
  },

  ssr: true,

  imports: {
    autoImport: true
  },
  builder: getBuilder(),
  build:{
    transpile: ['vuetify'],

  },
  booster: false
})
