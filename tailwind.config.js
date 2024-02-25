/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "750px",
      lg: "1100px",
    },
    extend: {
      backgroundImage: {
        "main-img":
          "url('https://stock.adobe.com/search?k=%22coding%20background%22')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
