/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#09ba8e',
        secondary: '#0d7a5f',
        light: '#d9fcf4',
      },
    },
  },
  plugins: [],
}
