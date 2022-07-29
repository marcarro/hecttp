/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "soft-grey": "#31363a",
      },
    },
  },
  plugins: [],
};
