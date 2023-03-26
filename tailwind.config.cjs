/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a37dd1",
        
"secondary": "#5678dd",
        
"accent": "#f391f7",
        
"neutral": "#311F37",
        
"base-100": "#F0EAF6",
        
"info": "#7DA4F7",
        
"success": "#28C8AB",
        
"warning": "#F2BC26",
        
"error": "#F41A46",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
