module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue: { 500: "#3199fe", A400: "#2f88ff" },
        blue_gray: { 900: "#16184a", "900_01": "#17194b" },
        white: { A700: "#ffffff" },
        gray: { 100: "#f8f5f4" },
      },
      fontFamily: { inriasans: "Inria Sans", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
