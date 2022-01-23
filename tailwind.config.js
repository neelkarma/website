module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "off",
  theme: {
    fontFamily: {
      heading: ["Inter", "sans-serif"],
      body: ["Chivo", "sans-serif"],
      serif: ["Newsreader", "Times New Roman"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
