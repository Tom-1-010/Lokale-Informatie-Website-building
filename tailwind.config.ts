import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7FB",
        surface: "#ffffff",
        soft: "#F3EDFB",
        ink: "#2D174D",
        muted: "#6B5A7D",
        line: "rgba(90,44,160,0.14)",
        primary: "#7D4CC6",
        dark: "#5A2CA0",
        accent: "#FF6FAF",
        accent_soft: "#FFC5DE",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
