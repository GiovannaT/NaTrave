/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.hmtl",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    fontSize: {
      xs: ['12px', '16px'], //font size, line height
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['32px', '40px'],
      '4xl': ['48px', '56px'],
    },
    extend: {
      colors:{
        black: '#0B0E16',
        white: '#F4F6FF',
        red:{
          300: '#BB2E57',
          500: '#F95C92',
          700: '#300219',
        },
        
        grey:{
          300:'#B1B4BD',
          500:'#91949D',
          700:'#696C74',

        },
      }
    },
  },
  plugins: [],
}
