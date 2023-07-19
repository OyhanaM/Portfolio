/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Caprasimo: ["Caprasimo, sans-serif"],
        Raleway: ["Raleway, sans serif"],
      },
    },
    backgroundImage: {
      homebg: "url('/assets/BG.png')",
      projet1: "url('/assets/photos/dog.jpg')",
    },
    colors: {
      pink: "#FF97BB",
      orange: "#FF6600",
      yellow: "#FFE289",
      light: "#FFE4D2",
      black: "#272626",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
