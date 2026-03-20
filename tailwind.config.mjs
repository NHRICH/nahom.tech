/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        plumNoir: "#0F0A1F",
        cloudDancer: "#F0F2F5",
        wasabi: "#E2FF44"
      },
      boxShadow: {
        halo: "0 20px 60px rgba(15, 10, 31, 0.2)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 10% 10%, rgba(226, 255, 68, 0.08) 0%, transparent 35%), radial-gradient(circle at 90% 80%, rgba(15, 10, 31, 0.2) 0%, transparent 40%)"
      },
      fontFamily: {
        display: ["ui-serif", "Iowan Old Style", "Palatino Linotype", "Times New Roman", "serif"],
        body: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
