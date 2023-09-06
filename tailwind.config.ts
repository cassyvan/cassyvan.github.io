import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "50%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        fish: {
          "0%": { transform: "rotate(95deg)" },
          "10%": { transform: "rotate(105deg)" },
          "20%": { transform: "rotate(115deg)" },
          "30%": { transform: "rotate(125deg)" },
          "40%": { transform: "rotate(135deg)" },
          "50%": { transform: "rotate(125eg)" },
          "60%": { transform: "rotate(115deg)" },
          "70%": { transform: "rotate(105deg)" },
          "100%": { transform: "rotate(95deg)" },
        },
        message: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(10deg)" },
          "20%": { transform: "rotate(20deg)" },
          "30%": { transform: "rotate(10deg)" },
          "40%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        avatar: "blob 12s linear infinite alternate",
        fish: "fish 2s linear infinite",
        message: "message 2s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
export default config;
