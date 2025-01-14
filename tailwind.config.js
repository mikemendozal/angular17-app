/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Georgia', 'ui-serif'],
        mono: ['SFMono-Regular', 'Menlo'],
      },
      borderWidth: {
        '1.8': '1.8px', // Agrega 1.8 píxeles como un nuevo tamaño de borde
      }
    },
    screens: {
      'xs': '475px',
      'xss': '320px',
      'x': '390px',
      'i': '375px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}

