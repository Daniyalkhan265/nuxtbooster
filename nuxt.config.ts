// https://nuxt.com/docs/api/configuration/nuxt-config
function getBuilder() {
  const builder =
      process.env.npm_config_builder || process.env.BUILDER || undefined;
  return builder === 'webpack' ? '@nuxt/webpack-builder' : undefined;
}
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-booster'],
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
  booster: {
    debug: false,
    // targetFormats: ['jpg|jpeg|png|gif'],
    densities: 'x1 x2',

    optimizeSSR: {
      cleanPreloads: true,
      cleanPrefetches: true,
      inlineStyles: true
    },

    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      }
    },}
})
