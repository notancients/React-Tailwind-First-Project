/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asparagus': '#6cae75',
        'hunyadi': '#edae49',
        'cerulean': '#1c6e8c',
        'charcoal': '#274156'
      }
    },
  },
  plugins: [],
}

