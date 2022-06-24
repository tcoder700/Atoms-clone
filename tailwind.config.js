/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:["Inter","sans-serif"],
        DMSerifDisplay:["DM Serif Display","serif"],
        
      },
      colors:{
        'atom':'#181034',
        'purple':'#4c319b',
        'eggplant':'#321780'
      },
      backgroundImage: {
        'Hero-Landing': "url('images/Hero_landing.png')",
        'Profile1':"url('images/Profile1.jpeg')",
        'Profile2':"url('images/Profile2.jpeg')",
        'Profile3':"url('images/Profile3.jpeg')",
        'Profile4':"url('images/Profile4.jpeg')",
        'Profile5':"url('images/Profile5.jpeg')",
        'Profile6':"url('images/Profile6.jpeg')",
        'Profile7':"url('images/Profile7.jpeg')",
        'Profile8':"url('images/Profile8.jpeg')",
        'Profile9':"url('images/Profile9.jpeg')"
        
      },
    },
  },
  plugins: [],
}
