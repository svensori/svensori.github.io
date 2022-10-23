/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "comic-1": "url('../img/bg-1.webp')",
        "comic-2": "url('../img/bg-2.webp')",
        "comic-3": "url('../img/bg-3.webp')",
      }),
    },
    fontFamily: {
      bangers: ["Bangers"],
      comic: ["Comic Neue"],
    },
  },
  plugins: [],
};
