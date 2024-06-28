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
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJZGyPZbwBxHMqcQPndByYy4EGG-4uaITtA&s')",
      },
    },
  },
  plugins: [],
};
