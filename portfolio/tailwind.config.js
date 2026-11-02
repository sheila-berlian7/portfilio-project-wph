/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0e",
        surface: "#141419",
        surfaceHover: "#1e1e24",
      },
    },
  },
  plugins: [],
}