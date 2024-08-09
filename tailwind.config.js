/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {


    },
  },
  plugins: [
    
  ],
}

module.exports =  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:
    {
      'primary':['Dancing Script'],
      'markazi':['Markazi Text']
      
    },
   
  animation:{
  spin:'spin 5.5s linear',

 },
  },
    
  },
  plugins: [],
}
