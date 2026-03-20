import { defineConfig } from "astro/config";
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
    })
  ],
  vite: {
    build: {
      sourcemap: false,
      cssMinify: true
    }
  }
});
