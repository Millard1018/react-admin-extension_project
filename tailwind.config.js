/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/admin/frontend/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

