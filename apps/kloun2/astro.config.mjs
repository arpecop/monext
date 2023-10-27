import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    mode: "directory",
  }),
  server: { port: 3000, host: true },
  experimental: {
    assets: true,
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