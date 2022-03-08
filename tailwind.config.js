const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const cssCustomisations = ({ addUtilities }) => {
  addUtilities({
    a: {
      color: colors.violet[800],
    },
  })
}

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    cssCustomisations,
    require('@tailwindcss/forms'),
  ],
}
