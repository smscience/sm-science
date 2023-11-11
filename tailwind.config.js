/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },

    extend: {
      colors: {
        mainColor: "#FF2905",
        secondaryColor: "#2B2A29",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("daisyui"),
    require("kutty"),
    require("tailgrids/plugin"),
  ],
};
