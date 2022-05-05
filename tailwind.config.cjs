const tailwindcss = require('tailwindcss');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-preset-env',
    tailwindcss
  ],
}
