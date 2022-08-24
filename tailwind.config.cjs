/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      
      screens: {
        'Mobile': '375px',
        'Desktop': '1440px',
      },

      // colors: {
      //   'White': 'hsl(0, 0%, 100%)',
      //   'Light gray': 'hsl(212, 45%, 89%)',
      //   'Grayish blue': 'hsl(220, 15%, 55%)',
      //   'Dark blue': 'hsl(218, 44%, 22%)',
      // },

      // fontFamily: {
      //   'Outfit': ['Outfit', 'sans-sarif'],
      // },
  

    },
  },
  plugins: [],
}