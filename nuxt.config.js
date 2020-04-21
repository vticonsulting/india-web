const path = require('path')

export default {
  css: [
    '~/assets/css/app.pcss',
  ],
  build: {
    extractCSS: true,

    postcss: {
      plugins: {
        tailwindcss: path.join(__dirname, 'tailwind.config.js'),
      }
    }
  }
}
