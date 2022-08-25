/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      
      screens: {
        'Mobile': '375px',
        'Desktop': '1440px',
      },

      colors: {
      //   'White': 'hsl(0, 0%, 100%)',
      //   'Light gray': 'hsl(212, 45%, 89%)',
      //   'Grayish blue': 'hsl(220, 15%, 55%)',
        // 'Dark blue': 'hsl(218, 44%, 22%)',
        'Dark-cyan': 'hsl(158, 36%, 37%)',
        'Dark-cyan-hover': 'hsl(158, 36%, 24%)',
        'Cream': 'hsl(30, 38%, 92%)',
        'Very-dark-blue': 'hsl(212, 21%, 14%)',
        'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'White': 'hsl(0, 0%, 100%)',
      },

      // <p> 14px

      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Fraunces': ['Fraunces'],
      },

    },
  },
  plugins: [],
}