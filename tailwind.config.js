/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Il va surveiller ton index.html
  theme: {
    extend: {
      colors: {
        "orva-cyan": "#00d2ff", // La couleur de ton logo
        "orva-dark": "#050505", // Ton fond sombre
      },
    },
  },
  plugins: [],
};
