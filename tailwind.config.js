/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow"],
        iBMPlexSans: ["IBM Plex Sans"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
