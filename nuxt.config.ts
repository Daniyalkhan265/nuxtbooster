// https://nuxt.com/docs/api/configuration/nuxt-config
import { readPackage } from 'read-pkg';

function getBuilder() {
  const builder =
      process.env.npm_config_builder || process.env.BUILDER || undefined;
  return builder === 'webpack' ? '@nuxt/webpack-builder' : undefined;
}
export default defineNuxtConfig({
  const { repository } = await readPackage();

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-booster'],
  runtimeConfig: {
    public: {
      githubRepoUrl: repository.url.replace(/^git\+(.*)\.git$/, '$1'),
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
