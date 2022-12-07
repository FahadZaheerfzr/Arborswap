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
        "light-gray-shade":"#FAF8F5",
        "dark-background": "#17181A",
      },
      backgroundImage: {
        'tree-pattern': "url('../public/images/home/tree-logo-desktop.svg')",
        'tree-pattern-mobile': "url('./public/images/home/tree-logo.svg')",
      }
    },
  },
  plugins: [],
}
