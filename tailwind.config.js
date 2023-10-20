/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes:{
        img:{
          '50%': {transform:'translateY(3px)'}
        },
        divpro:{
          '0%' : {transform: 'translateX(-100px)'},
          '50%' : {transform: 'translateX(100px)'},
          '100%' : {transform: 'translateX(-10px)'}
        }
      },
      animation:{
        imgs: 'img 1s ease-in-out infinite',
        div: 'divpro 1s ease-in-out '
      },
      boxShadow:{
        shadowhite: '0px 5px 10px '
      },
      backgroundColor:{
        bgcart: 'linear-gradient (to left bottom ,rgb(245, 58, 58) 20%, rgb(8, 197, 30) 20% , rgb(38, 38, 234) 100%) '
      }
    },
  },
  plugins: [],
}

