/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        'xs':'390px'
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // 'lg':'1440px'
      },
      spacing: {
        100:"24rem",
        90:"20rem",
        10:"10rem",
        twentyRem:"19rem",
        thirtyRem:"30rem",
        fourtyRem:"40rem",
        fourtyfiveRem:"45rem",
        32:"32px",
        heroh1:"4rem",
        fourRem:"3rem",
        ninetyFive:"95%",
        leading230:"230%",
        leading180:"180%"

      },
      fontFamily: {
        custom: ['DM Sans', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        monsterrate: ['Poppins', 'Arial', 'sans-serif'],
        syne:['Syne','sans-serif'],
        russo:['Russo One', 'sans-serif']


      },
      colors: {
        customBlue: '#3498db',
        lightwhite:'#FFFFF7',
        customRed: '#e74c3c',
        customGreen: '#2ecc71',
        grey:'hsla(0,0%,100%,.6);',
        greywhite:'hsla(0,0%,100%,.8);',
        // You can also define shades of a color
        customGray: {
          50: '#f8f9fa',
          100: '#e9ecef',
          // ... other shades
          900: '#212529',
        },
      },
    },
  },
  plugins: [],
}

