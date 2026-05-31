import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        signature: ["var(--font-signature)", "cursive"],
      },
      colors: {
        ink: {
          DEFAULT: "#ffffff",
          soft: "#e5e5e5",
          muted: "#a3a3a3",
          faint: "#525252",
        },
        paper: {
          DEFAULT: "#050505",
          soft: "#111111",
          glass: "rgba(17, 17, 17, 0.6)",
        },
        accent: {
          DEFAULT: "#8b5cf6", // Vibrant purple
          soft: "#c4b5fd",
          glow: "#a78bfa",
          teal: "#14b8a6",
          blue: "#3b82f6"
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
