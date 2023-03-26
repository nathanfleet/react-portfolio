/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151030",
        secondary: "#aaa6c3",
        tertiary: "#f3f3f3",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/herobg.png')"
      }
    },
  },
  plugins: [],
}
