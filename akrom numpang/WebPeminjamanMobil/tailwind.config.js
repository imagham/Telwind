/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"], 
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'title': ['Poppins']
      },
      colors: {
        'main-green': '#669834',
        'main-blue': '#010066',
        'slatecustom': '#C2C2C2'
      },
    },
  },
  plugins: [],
}

