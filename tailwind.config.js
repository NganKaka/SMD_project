/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#844391', // Approximated lighter shaded from logo
          600: '#5a2b81', // Text color from the designs
          800: '#3a1754'
        }
      },
      fontFamily: {
        poppins: ['"Fz Poppins"', '"Poppins"', 'sans-serif'], // prioritizing Fz Poppins as requested
      }
    },
  },
  plugins: [],
}
