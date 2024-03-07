/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        salsa: "salsa",
        Montserrat:"Montserrat",
      },
      fontSize: {
        fadgham: "30px",
        22: "22px",
      },
      backgroundImage: {
        kucing: 'url("../public/image/kucing.jpeg")',
        sawah: 'url("../public/image/sawah.jpg")',
        ustadz: 'url("../public/image/ustadz.jpg")',
        biru: 'url("../public/image/biru.jpeg")',
        roti: 'url("../public/image/roti.jpg")',
        laundry: 'url("../public/image/Ractangle 1.png")',
        adzdry: 'url("../public/image/abudzar LOGO.jpg.png")',

      },
      screens: {
        "4k": "1500px",
        'dkp': '1280px',
      },
      
    },
  },
  plugins: [],
};
