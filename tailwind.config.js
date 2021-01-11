module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7B93DB",
        secondary: "#BED0F7",
        dark_gray: "#9AA5B1",
        light_gray: "#F5F7FA",
        dark: "#52606D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
