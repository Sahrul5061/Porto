/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        darks: "#0f172a",
        secondary: "#64748b",
        reactjs: "#6297f4",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
