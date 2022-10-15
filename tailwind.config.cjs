/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fuzzy': ['Fuzzy Bubbles', 'monospace', 'sans-serif'],
        'poppins': ['Poppins', 'monospace', 'sans-serif']
      }
    },
  },
  plugins: [],
}