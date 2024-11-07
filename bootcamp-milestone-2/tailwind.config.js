/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'cream': '#D9D7C5',
        'torq': '#86A6A6',
        'header-blue': '#3C6373',
        'darkest-blue': '#074259',
      },
    },
  },
  plugins: [],
};