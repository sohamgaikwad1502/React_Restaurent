/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :
      {
        'poppins' : [ "Poppins", 'system-ui']
      }
      
    },
  },
  plugins: [],
}

