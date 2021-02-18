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
        black: '#222222',
        'grey-darkest': '#4a4a4a',
        'grey-light': '#DEDEDE',
        blue: '#1747b0',
      },
      lineHeight: {
        'loose': '40px'
      },
      shadows: {
        default: '0 1px 7px 0 rgba(36, 37, 38, 0.08)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
