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
        cream: '#F6F5F2',
        beige: '#F0EBE3',
        pink: '#F3D0D7',
        offwhite: '#FFEFEF'
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
