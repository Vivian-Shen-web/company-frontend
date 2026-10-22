/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'gray': 'rgb(217,217,217)',
        'picker': 'rgb(22,119,255)',
        'hover': 'rgba(0, 0, 0, 0.04)'
      },
    },
  },
  plugins: [],
}

