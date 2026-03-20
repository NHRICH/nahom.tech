/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        deepCharcoal: "#121212",
        mutedGold: "#C5A059",
        charcoalSoft: "#1D1D1D",
        ivoryFog: "#ECE8DF"
      },
      boxShadow: {
        glowGold: "0 0 0 1px rgba(197, 160, 89, 0.3), 0 18px 36px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        film:
          "radial-gradient(circle at 15% 15%, rgba(197, 160, 89, 0.12) 0%, transparent 32%), radial-gradient(circle at 85% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 30%)"
      },
      fontFamily: {
        display: ["Bodoni MT", "Didot", "Times New Roman", "serif"],
        body: ["Gill Sans", "Optima", "Avenir Next", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};
