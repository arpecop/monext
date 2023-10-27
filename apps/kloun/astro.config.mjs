import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  server: { port: 3000, host: true },
  define: {
    "process.env.DB_URL2": JSON.stringify(process.env.DB_URL2),
    "process.env.DB_URL1": JSON.stringify(process.env.DB_URL1),
  },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
