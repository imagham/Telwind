/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'salsa':'salsa',
      },
      fontSize:{
        'fadgham':'30px',
      },
      backgroundImage :{
        kucing:'url("../public/image/kucing.jpeg")',
        sawah:'url("../public/image/sawah.jpg")'
      }
    },
  },
  plugins: [],
}

