/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch