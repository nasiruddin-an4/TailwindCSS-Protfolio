/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    fontFamily:{
      Jost: ["Jost", "system-ui"],
    },
    extend: {
      spacing:{
        "big": "38rem",
      },
    },
  },
  plugins: [],
}
