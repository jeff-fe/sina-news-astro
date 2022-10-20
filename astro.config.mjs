import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  integrations: [vue()],
  adapter: vercel(),
});
