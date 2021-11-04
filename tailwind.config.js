module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {},
    },
    textColor: {
      primary: "#F53855",
      dark: "#0B132A",
      grey: "#4F5665",
      white: "#ffffff",
    },
    backgroundColor: {
      primary: "#F53855",
      grey: "#EEEFF2",
      white: "#ffffff",
      main: "#f2f2f2",
      footer: "#F8F8F8",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
