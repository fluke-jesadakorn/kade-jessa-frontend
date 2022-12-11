import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    // sitemap({
    //   canonicalURL:"https://kadejessa.com"
    // }),
    partytown({
      config: {
        debug: true,
        forward: ["dataLayer.push", "liff"],
      },
    }),
    react(),

  ],
  output: "server",
  adapter: vercel(),
});
