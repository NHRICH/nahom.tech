/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        dayBg: "#F0F0F0",
        dayText: "#4A3F36",
        nightBg: "#0A0A0A",
        nightText: "#FFFFFF",
        rolexGreen: "#006039",
        cyberNeon: "#70f7cf"
      },
      boxShadow: {
        rolexGlow: "0 0 0 1px rgba(0, 96, 57, 0.55), 0 0 18px rgba(0, 96, 57, 0.35)"
      },
      fontFamily: {
        headline: ["Inter Tight", "Arial Black", "sans-serif"],
        technical: ["JetBrains Mono", "Consolas", "monospace"]
      }
    }
  },
  plugins: []
};
