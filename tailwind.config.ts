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
      },
      animation: {
        avatar: "blob 12s linear infinite alternate",
        lightbulb: "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
export default config;
