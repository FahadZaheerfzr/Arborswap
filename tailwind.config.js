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
        "primary-green": "#00783F",
        "dark-text":"#464754",
        "light-gray-shade":"#FAF8F5"
      },
      backgroundImage: {
        'tree-pattern': "url('../public/images/collections/Tree Logo Desktop.svg')",
        'tree-pattern-mobile': "url('./public/images/collections/Tree Logo.svg')",
      }
    },
  },
  plugins: [],
}
