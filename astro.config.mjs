import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://moisessalgado.com.br",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "pt", locales: { pt: "pt-BR", en: "en" } },
    }),
  ],
});
