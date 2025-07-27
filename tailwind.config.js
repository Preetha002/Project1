/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // enables toggling dark mode with 'dark' class
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',   // Vibrant blue
        secondary: '#8B5CF6', // Electric purple
        neutral: '#F8FAFC',   // Light glass-white shade
        accent: '#F97316',    // Coral accent
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // optional plugin for form styling
  ],
};
