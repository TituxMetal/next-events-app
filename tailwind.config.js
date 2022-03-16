const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral[800],
        gray: colors.neutral,
        white: colors.neutral[50]
      }
    }
  }
}
