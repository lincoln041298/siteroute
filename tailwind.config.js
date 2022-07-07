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
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
