/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js ,jsx}"],
  theme: {
    extend:{
      transitionDelay: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

