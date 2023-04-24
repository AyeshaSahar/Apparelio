/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {    
          "primary": "#c4b5fd",
          "secondary": "#7c3aed",       
          "accent": "#e879f9",     
          "neutral": "#1F2937",   
          "base-100": "#FFFFFF",     
          "info": "#3ABFF8",     
          "success": "#4ade80",        
          "warning": "#facc15",     
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

