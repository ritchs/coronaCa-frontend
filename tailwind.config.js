/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        portada: "url('/public/images/back1.png')",
        portada2: "url('/public/images/back2.png')",
      }
    },
  },
  plugins: [],
}
