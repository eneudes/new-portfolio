/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
   
  },
    extend: {
      transitionProperty:{
       
          'transition-duration': '0.4s',
          'transition-timing-function': 'ease-out',
          'transition-delay': '0s',
          'transition-property': 'all',
        
       }
    },
  plugins: [],
}

