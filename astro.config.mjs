// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },

  experimental: {
    svg: {
      mode: "sprite"
    }
  },

  site: "https://cv.llusync.com/"
})
