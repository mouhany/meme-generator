/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seance: {
          DEFAULT: "#762280",
          50: "#FFFEFF",
          100: "#F9EEFA",
          200: "#EECEF2",
          300: "#E3ADE9",
          400: "#D88DE1",
          500: "#CD6DD8",
          600: "#C24DD0",
          700: "#B133C0",
          800: "#942BA0",
          900: "#762280",
          950: "#621C6A",
        },
      },
    },
  },
  plugins: [],
};
