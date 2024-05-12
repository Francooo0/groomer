import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink-darkest': '#A87676',
        'custom-pink-dark': '#CA8787',
        'custom-pink-light': '#E1ACAC',
        'custom-pink-lightest': '#FFD0D0',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0)' },
          '50%': { transform: 'translate(30px, -30px) rotate(360deg)' }
        },
        blob: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 7s infinite'
      }
    },
  },
};

export default config;
