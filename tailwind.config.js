/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/screens/**/*.tsx',
    './src/app/components/**/*.tsx',
    './src/routes/*.tsx',
    './App.tsx',
  ],
  theme: {
    extend: {
      colors: {
        brand_light: '#00b37e',
        brand_mid: '#00875f',
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          800: '#202024',
          700: '#29292E',
          600: '#323238',
        },
      },
      fontSize: {
        XS: 12,
        SM: 14,
        MD: 16,
        LG: 18,
        XL: 20,
        XXL: 24,
        XXXL: 32,
      },
      fontFamily: {
        roboto_regular: 'Roboto_400Regular',
        roboto_bold: 'Roboto_700Bold',
      },
    },
  },
  plugins: [],
}

