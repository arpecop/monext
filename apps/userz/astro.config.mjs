import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
  integrations: [tailwind(), db()],
  vite: {
    build: {
      minify: false,
    },
    define: {
      "process.env.DB_URL2": JSON.stringify(process.env.DB_URL2),
      "process.env.DB_URL1": JSON.stringify(process.env.DB_URL1),
    },
  },
});
