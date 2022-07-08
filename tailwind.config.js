/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-opacity': 'rgba(255, 255, 255, .8)',
        'black-opacity': 'rgba(0, 0, 0, .8)',
      },
      keyframes: {
        changed: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed1: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed2: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed3: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed4: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed5: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed6: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
        changed7: {
          '0%': { transform: 'translate(5rem)', opacity: '.5' },
          '100%': { transform: 'translate(0)' },
        },
      }, 
      animation: {
        changed: 'changed .1s ease-in-out forwards',
        changed1: 'changed .2s ease-in-out forwards',
        changed2: 'changed .3s ease-in-out forwards',
        changed3: 'changed .4s ease-in-out forwards',
        changed4: 'changed .5s ease-in-out forwards',
        changed5: 'changed .6s ease-in-out forwards',
        changed6: 'changed .7s ease-in-out forwards',
        changed7: 'changed .8s ease-in-out forwards',
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
