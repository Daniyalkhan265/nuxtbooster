// https://nuxt.com/docs/api/configuration/nuxt-config
function getBuilder() {
  const builder =
      process.env.npm_config_builder || process.env.BUILDER || undefined;
  return builder === 'webpack' ? '@nuxt/webpack-builder' : undefined;
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  scripts: [
    { src: '~/samsung.ts', type: 'module' }
  ],
  modules: [],
  runtimeConfig: {
    public: {
      disableInfoLayer: false
    }
  },
  speedkit: {
    runOptions: { maxTime: 1000, threshold: 0.65 }
  },
  ssr: true,

  imports: {
    autoImport: false
  },
  builder: getBuilder(),

  // Remove all booster-related configurations
  // booster: {
  //   // ... (all booster options)
  // },

  hooks: {
    'app:mounted': async () => {
      try {
        const isSamsung = navigator.userAgent.toLowerCase().includes('samsung');

        if (!isSamsung) {
          await import('nuxt-booster');
        } else {
          console.warn('Nuxt Booster disabled for Samsung browser');
        }
      } catch (error) {
        console.error('Error in Nuxt Booster initialization:', error);
      }
    }
  },

  watch: {
    'speedkit.runOptions.maxTime': {
      handler() {
        if (process.client) {
          this.hooks['app:mounted'].value();
        }
      }
    }
  }
});
