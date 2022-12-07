/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "gilroy": ["Gilroy", "GilroyBold"],
      },
      colors: {
        "light-text": "#A69F9F",
        "primary-green": "#00783F",
        "dark-text": "#464754",
        "light-gray-shade": "#FAF8F5",
        "dark-background": "#17181A",
        "black-shade2-background": "#202226",
        "black-shade3-background": "#242322",
        "black-shade4-background": "#2E2C28",
        "dark-text-color": "#6C717A",
        "dark-white-color": "#EEF1F8",
        "dark-gray": "#BBB6B0",
      },
      backgroundImage: {
        'tree-pattern': "url('../public/images/home/tree-logo-desktop.svg')",
        'tree-pattern-mobile': "url('./public/images/home/tree-logo.svg')",
      }
    },
  },
  plugins: [],
}
