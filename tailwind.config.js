/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '968': '64rem',
      },
      colors: {
        'white': '#fff',
        'navbtnbg':'#2D22AA',
        'textColor':'#000000'
      },
    },
  },
  plugins: [],
}
