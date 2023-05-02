/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5ee58f",
        
"secondary": "#f45f8e",
        
"accent": "#f4aba1",
        
"neutral": "#1D222B",
        
"base-100": "#F9F9FB",
        
"info": "#A6D1E3",
        
"success": "#157A57",
        
"warning": "#EAB934",
        
"error": "#FA6E52",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

