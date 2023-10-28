import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  build: {
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
