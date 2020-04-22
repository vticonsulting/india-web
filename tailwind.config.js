module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald'],
        body: ['Open Sans'],
        cursive: ['Pacifico', 'cursive'],
      },
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-elevation')(['responsive']),
    require('@tailwindcss/custom-forms'),
  ],
}
