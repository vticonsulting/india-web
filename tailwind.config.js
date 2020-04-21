module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-elevation')(['responsive']),
    require('@tailwindcss/custom-forms'),
  ],
}
