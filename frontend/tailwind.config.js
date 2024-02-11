/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  plugins: [require('tailwindcss-animate')],
};
