/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0B10",
          900: "#0F0F17",
          800: "#14141C",
          700: "#1C1C26",
          600: "#252534",
          500: "#3A3A4D",
        },
        chalk: {
          DEFAULT: "#F5F5F7",
          muted: "#8B8B9C",
          dim: "#5A5A6B",
        },
        neon: {
          DEFAULT: "#C6FF3D",
          soft: "#D9FF7A",
          glow: "#C6FF3D33",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      animation: {
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
