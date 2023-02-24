/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fontMonserrat': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        portada: "url('/public/images/back1.png')",
        portada2: "url('/public/images/back2.png')",
        movil: "url('/public/images/backmovil.png')"
      }
    },
  },
  plugins: [],
}
