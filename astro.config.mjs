import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";
// import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sitemap({
      canonicalURL:"https://kadejessa.com"
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        debug: true,
        forward: ["dataLayer.push", "liff"],
      },
    }),
    react(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
  ],
  output: "server",
  adapter: vercel(),
});
