/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', //ダークモードを有効化する
  theme: {
    extend: {
      colors: {
        black: '#0d0015',
        white: '#fcf9ff',
      },
    },
  },
  plugins: [],
}
