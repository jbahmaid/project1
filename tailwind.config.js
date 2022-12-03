/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ['./src/**/*.{html,js,jsx,ts,tsx}',
  './components/**/*.{html,js,jsx,ts,tsx}',
  './pages/**/*.{html,js,jsx,ts,tsx}',
  './index.html'],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081A51",
        "light-white":"rgba(255,255,255,0,17",
      },

    },
  },
  plugins: [],
}
