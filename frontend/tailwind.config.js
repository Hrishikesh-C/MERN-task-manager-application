module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#24ab8f",
        "primary-dark": "#268d77",
        "darkBg": "#0F172A", // Deep Dark Background
        "inputBg": "#1E293B", // Dark Gray Input Background
        "textPrimary": "#FFFFFF", // Bright White Text
        "textSecondary": "#CBD5E1", // Muted Gray Text
        "borderDark": "#334155", // Border for Dark Mode
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(to right, #1e3a8a, #9333ea)", // Deep Blue to Purple Gradient
      },
      animation: {
        "loader": "loader 1s linear infinite",
        "fadeIn": "fadeIn 1.5s ease-in-out",
        "slideIn": "slideIn 1s ease-in-out",
      },
      keyframes: {
        loader: {
          "0%": { transform: "rotate(0) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.5)" },
          "100%": { transform: "rotate(360deg) scale(1)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      }
    },
  },
  plugins: [],
};
