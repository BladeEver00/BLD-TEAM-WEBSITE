// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {


      colors: {
        'bld-gold': '#F6C300',
        'bld-black': '#1A1A1A',
        'bld-white': '#F4F1E9',
        'bld-gray': '#2C2C2C',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  
  plugins: [],
}