const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      logo: '"FONTSPRING DEMO - Blue Vinyl"',
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("third", "&:nth-child(3)");
    }),
  ],
};
