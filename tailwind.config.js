/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'rgba(22, 22, 22, 1)', // Custom dark mode background color
      },
    },
  },
  plugins: [],
}
