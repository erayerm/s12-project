/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgDarkBlack: "#2A262B",
        bgDarkGray: "#484148",
        textDarkGray: "#D9D9D9",

        bgLightGray: "#F4F4F4",
        textLightBlack: "#0a0a14",
      },
    },
  },
  plugins: [],
};
