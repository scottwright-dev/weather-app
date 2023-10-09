/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.html',      
    './src/index.js', 
    './src/modules/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
