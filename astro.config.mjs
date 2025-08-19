// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },

  experimental: {
    fonts: [
      {
        name: "Geist",
        cssVariable: "--font-geist",
        provider: fontProviders.fontsource(),
        weights: ["100 900"],
        display: "swap"
      },
      {
        name: "Monaspace Neon",
        cssVariable: "--font-monaspace-neon",
        provider: fontProviders.fontsource(),
        weights: [300, 400, 500],
        display: "swap"
      },
      {
        name: "Monaspace Radon",
        cssVariable: "--font-monaspace-radon",
        provider: fontProviders.fontsource(),
        weights: [400],
        styles: ["italic"],
        display: "swap"
      }
    ]
  },

  site: "https://cv.yupanqui.dev/"
})
