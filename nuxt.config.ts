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
  modules: ['nuxt-booster', '@nuxt/scripts'],
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

  booster: {
    debug: false,
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
        dcl: 1200
      }
    }
  },

  hooks: {
    'app:mounted': async () => {
      try {
        const isSamsung = navigator.userAgent.toLowerCase().includes('samsung');

        if (!isSamsung) {
          await import('nuxt-booster');

          // Additional checks to ensure Nuxt Booster is properly initialized
          if (window.NuxtBooster && typeof window.NuxtBooster.init === 'function') {
            window.NuxtBooster.init();
          }
        } else {
          console.warn('Nuxt Booster disabled for Samsung browser');
          delete window.NuxtBooster; // Ensure Nuxt Booster is completely removed
        }
      } catch (error) {
        console.error('Error in Nuxt Booster initialization:', error);
      }
    }
  },

  watch: {
    'booster.detection.browserSupport': {
      handler() {
        if (process.client) {
          this.hooks['app:mounted'].value();
        }
      }
    }
  }
});
