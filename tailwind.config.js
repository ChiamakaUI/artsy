/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
