module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,ts}'
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    topnav : {
      "hsize": '4rem',
    },
    extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
