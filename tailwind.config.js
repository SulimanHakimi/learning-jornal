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
          "url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg')",
      },
    },
  },
  plugins: [],
};
