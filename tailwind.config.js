const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px'
      },
      colors: {
        primary: '#00C7C7',
        'primary-emphasis': '#008E86',
        secondary: '#EAF8F8',
        success: '#00C2FF',
        light: '#4F4F4F'
      },
      fontFamily: {
        sans: ['var(--font-noto_sans_tc)', ...fontFamily.sans],
        alkatra: ['var(--font-alkatra)']
      }
    }
  },
  plugins: []
};
