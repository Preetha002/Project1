/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust if your components live elsewhere
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#6B21A8', // main purple shade for backgrounds
          800: '#581C87', // darker purple for sidebar bg and cards
          900: '#4C1D95', // deepest purple shade
        },
        indigo: {
          400: '#818CF8', // highlight / progress bar fill
          600: '#4F46E5', // primary indigo shade for buttons
          700: '#4338CA', // hover / darker indigo
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // default sans font is Poppins
      },
    },
  },
  plugins: [],
};
