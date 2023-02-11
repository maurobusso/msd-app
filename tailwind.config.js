/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'lg': '1024px'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
