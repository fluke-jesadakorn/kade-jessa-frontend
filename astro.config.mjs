import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), react()],
  output: "server",
  // adapter: cloudflare({ mode: "directory" }),
  adapter: cloudflare()
});