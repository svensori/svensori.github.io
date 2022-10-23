/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "comic-1": "url('../img/bg-1.webp')",
        "comic-2": "url('../img/bg-2.webp')",
        "comic-3": "url('../img/bg-3.webp')",
        "comic-4": "url('../img/bg-4.webp')",
        "comic-5": "url('../img/bg-5.webp')",
        "comic-6": "url('../img/bg-6.webp')",
        "comic-7": "url('../img/bg-7.webp')",
        "comic-8": "url('../img/bg-8.webp')",
      }),
    },
    fontFamily: {
      sans: ["Walter Turncoat"],
      bangers: ["Bangers"],
    },
  },
  plugins: [],
};
