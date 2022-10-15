/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        blue: "#198ccfff",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
