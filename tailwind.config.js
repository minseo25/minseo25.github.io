/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'tab': "url('./assets/images/tab_bg.png')",
    },
    screens: {
      // Height-based media queries
      'h-lg': {'raw': '(min-height: 1000px)'},
    }
  },
  plugins: [],
};