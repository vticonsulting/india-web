const path = require('path')

export default {
  mode: 'spa',
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap' },
      // { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&family=Oswald:wght@375;600&family=Pacifico&display=swap' },
    ],
  },
  plugins: [
    '~/plugins/buefy'
  ],
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
