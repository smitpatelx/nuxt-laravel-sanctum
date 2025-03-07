// import this after install `@mdi/font` package
// import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'


const light: ThemeDefinition = {
  colors: {
    // background: 'oklch(0.985 0 0)',
    // surface: 'oklch(0.985 0 0)',
    // primary: 'oklch(0.588 0.158 241.966)',
    // secondary: 'oklch(0.274 0.006 286.033)',
    background: '#fafafa',
    surface: '#fafafa',
    primary: '#0084d1',
    secondary: '#27272a',
    tertiary: '#121212',
  },
}

const dark: ThemeDefinition = {
  colors: {
    // background: 'oklch(0.141 0.005 285.823)',
    // surface: 'oklch(0.141 0.005 285.823)',
    // primary: 'oklch(0.588 0.158 241.966)',
    // secondary: 'oklch(0.705 0.015 286.067)',
    background: '#09090b',
    surface: '#09090b',
    primary: '#0084d1',
    secondary: '#9f9fa9',
    tertiary: '#f5f5f5',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light,
        dark,
      }
    }
  })
  app.vueApp.use(vuetify)
})
