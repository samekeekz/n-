/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "icon-play": "url('./src/assets/play.svg')"
      },
      backgroundColor: {
        'primary': 'linear-gradient(0deg, rgba(0, 0, 0, .07) 0, rgba(0, 0, 0, .9) 2%, rgba(0, 0, 0, 0) 100%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }

    },
  },
  plugins: [],
}