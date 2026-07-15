import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
        secondary: "#0B0B0B",
        background: "#050505",
        surface: "#111111",
        text: "#FFFFFF",
        muted: "#A1A1AA",
        border: "#262626",
      },

      fontFamily: {
        heading: ["Cinzel", "serif"],
        body: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        gold: "0 0 40px rgba(212,175,55,.35)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(0,0,0,.65), rgba(0,0,0,.9))",
      },
    },
  },

  plugins: [],
};

export default config;
