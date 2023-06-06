/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage:{
        BackMobile:"url('../images/pattern-background-mobile.svg')",
        BackDesktop: "url('../images/pattern-background-desktop.svg')",
      },
      fontFamily: {
        Red_Hat: ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        Pale_blue:'hsl(225, 100%, 94%)',
        Bright_blue:'hsl(245, 75%, 52%)',
        Very_pale: 'hsl(225, 100%, 98%)',
        Desaturated:'hsl(224, 23%, 55%)',
        Dark_blue:'hsl(223, 47%, 23%)',
      }
    },
  },
  plugins: [],
}

