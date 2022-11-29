/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "gilroy": ["Gilroy", "GilroyBold"],
      },
      colors:{
        "light-text":"#A69F9F",
        "primary-green": "#00783F"
      }
    },
  },
  plugins: [],
}
