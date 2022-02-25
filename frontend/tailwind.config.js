module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1570px" },
      // => @media (max-width: 1279px) { ... }

      ss: { max: "1170px" },

      lg: { min: "900px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },

      vs: { max: "760px" },
      // => @media (max-width: 799px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primaryb: "#242222",
        secondary: "#424141",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
