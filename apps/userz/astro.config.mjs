import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind()],
  vite: {
    build: {
      minify: false,
    },
    define: {
      "process.env.DATABASE_URL": JSON.stringify(process.env.DATABASE_URL)
    },
  },
});
