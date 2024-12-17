/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE1133',     // red
        secondary: '#000000',   // black
        accent: {
          yellow: '#FFD700',    // golden yellow for stars
          green: '#39FF14'      // bright green
        }
      }
    },
  },
  plugins: [],
}