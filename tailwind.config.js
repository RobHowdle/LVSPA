const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Open Sans',
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        black: '#222222'
        'grey-darkest': '#4a4a4a'
      },
      lineHeight: {
        'loose': '40px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
