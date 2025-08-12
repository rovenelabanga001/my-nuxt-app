// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "."),
    assets: "/<rootDir>/assests",
  },
  css: ["@/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
