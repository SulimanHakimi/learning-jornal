/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "350px",
      md: "750px",
      lg: "1100px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://static.vecteezy.com/system/resources/thumbnails/003/106/496/small/technology-background-with-binary-code-pattern-free-vector.jpg')",
      },
    },
  },
  plugins: [],
};
