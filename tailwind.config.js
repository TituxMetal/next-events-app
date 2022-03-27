const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.neutral[800],
        secondary: colors.emerald[600],
        emerald: colors.emerald,
        gray: colors.neutral,
        sky: colors.sky,
        teal: colors.teal,
        white: colors.neutral[50]
      }
    }
  }
}
