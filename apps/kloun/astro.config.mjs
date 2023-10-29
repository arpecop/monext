import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  server: { port: 3000, host: true },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
  vite: {
    define: {
      "process.env.DB_URL1": process.env.DB_URL1,
    },
  },
});
