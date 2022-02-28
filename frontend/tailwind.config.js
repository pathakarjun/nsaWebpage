module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1600px" },
      // => @media (max-width: 1279px) { ... }

      ss: { max: "1180px" },

      lg: { min: "920px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "920px" },

      vs: { max: "820px" },
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
