export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#023047",
        ocean2: "#0B3A57",
        cyan: "#219EBC",
        sky: "#8ECAE6",
        sun: "#FFB703",
        orange: "#FB8500",
        paper: "#FFFFFF",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(2,48,71,.12)",
        glow: "0 0 50px rgba(33,158,188,.22)",
      },
      borderRadius: { mega: "2rem" },
    },
  },
  plugins: [],
};
