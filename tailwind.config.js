/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "400px",
      sm: "692px",
      md: "960px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Inter"],
      display: ["Lexend"],
    },

    extend: {},
  },
  plugins: [],
};
