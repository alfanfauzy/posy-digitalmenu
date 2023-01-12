/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/posy-fnb-ds/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: '#ffffff',
          20: '#F5F5F5',
          30: '#EDEDED',
          40: '#E0E0E0',
          50: '#C2C2C2',
          60: '#9E9E9E',
          70: '#757575',
          80: '#616161',
          90: '#424242',
          100: '#0A0A0A',
        },
        'red-caution': '#D40000',
        'red-accent': '#FC5454',
        success: '#37B175',
      },
      container: {
        screens: {
          sm: '576px',
        },
        // padding: '1rem',
      },
    },
  },
  plugins: [],
}
