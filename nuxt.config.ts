// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    'nuxt-auth-sanctum',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  runtimeConfig: {
    public: {
      backendBaseUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
    }
  },
  sanctum: {
    baseUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
    endpoints: {
      login: '/api/login',
      logout: '/api/logout',
      user: '/api/user',
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
