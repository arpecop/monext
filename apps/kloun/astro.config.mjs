import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    mode: "directory",
  }),
  build: {
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
  image: {
    service: {
      entrypoint: "./src/image-service.ts",
    },
  },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
