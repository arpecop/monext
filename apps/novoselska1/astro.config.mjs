import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    wasmModuleImports: true,
    imageService: "passthrough"
  }),
  integrations: [tailwind(), react(), auth()],
  vite: {
    build: {
      minify: false
    },
    define: {
      "process.env.DB_URL2": JSON.stringify(process.env.DB_URL2),
      "process.env.GSECRET": JSON.stringify(process.env.GSECRET),
      "process.env.CLOUDFLARE_TOKEN": JSON.stringify(process.env.CLOUDFLARE_TOKEN),
      "process.env.OPENAI_API_KEY": JSON.stringify(process.env.OPENAI_API_KEY),
      "process.env.SECRET": JSON.stringify(process.env.SECRET),
    }
  }
});
