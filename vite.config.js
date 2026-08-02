import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist()),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    outDir: 'dist',
  },
})
