import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  compressHTML: true,
  prefetch: false,
  build: {
    inlineStylesheets: "always"
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react()
  ],
  vite: {
    build: {
      sourcemap: false,
      cssMinify: true
    }
  }
});
