import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), react()],
  vite: {
    build: {
      minify: false
    },
    define: {
      "process.env.DATABASE_URL": JSON.stringify(process.env.DATABASE_URL)
    }
  }
});