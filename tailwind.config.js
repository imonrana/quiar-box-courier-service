/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "primary" : ["Raleway", "sans-serif" ],
        "secondary":["Oxanium" , "sans-serif"]
      },
      maxWidth:{
        "container" : "1320px"
      },
      colors:{
        "primary": "#F95C19",
        "secondery" : "#FFD078"
      }, 
      backgroundImage:{
        "sectionBg": "linear-gradient(to right, #FFF7E7 , #FFF1DC) ",
        "modalbg":"url('/src/assets/modal_bg.png')"
      }

     
    },
  },
  plugins: [],
}