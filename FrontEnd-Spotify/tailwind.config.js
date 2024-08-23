/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {//adiciona o breakpoint personalizado para responsivo
        '743px': {'max': '743px'}, 
        '687px': {'max': '687px'}, 
        '523px': {'max': '523px'}, 
        '418px': {'max': '418px'}, 
      },
      keyframes: {
        slideIn: {//adiciona efeito para o slide dos cards
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }, 
        },
      },
      animation: {//adiciona efeito para o slide dos cards
        slideIn: 'slideIn 0.5s ease forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
