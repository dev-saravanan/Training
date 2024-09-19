/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lroboto: ['Roboto Light', 'sans-serif'],
        nroboto: ['Roboto Normal', 'sans-serif'],
        broboto: ['Roboto bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

