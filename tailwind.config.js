//https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "669px" },
        fhd: { min: "1700px" },
      },
      colors: {
        "backgound-dark": "#121212",
        "card-dark": "#23222b",
        primary: "#009782",
        secondary: "#00B89F",
        warning: "#FF5C00",
        error: "#D8000C",
        success: "#4BB543",
      },
    },
  },
  plugins: [],
};
