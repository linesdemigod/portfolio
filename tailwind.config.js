/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0a192f",
      secondary: "#2ad8da",
      textPrimary: "#ccd6f6",
      textSecondary: "#8892b0",
      tertiary: "#133040",
      backgroundPrimary: "#112240",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      violet: colors.violet,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      teal: colors.teal,
      sky: colors.sky,
      purple: colors.purple,
      slate: colors.slate,
      rose: colors.rose,
      slate: colors.slate,
      zinc: colors.zinc,
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
          sm: "4rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "10rem",
        },
      },
    },
  },
  plugins: [],
};
