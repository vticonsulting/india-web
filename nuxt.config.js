const path = require('path')

export default {
  css: [
    '~/assets/css/app.css',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      }
    },
  }
}
