// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// BASE применяется только для статической сборки под GitHub Pages (PAGES=1).
// В dev/preview Lovable сайт отдаётся с корня "/", поэтому base должен быть "/".
const IS_PAGES = process.env.PAGES === "1";
const BASE = IS_PAGES ? "/redkino/" : "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: BASE,
  },
  nitro: {
    preset: IS_PAGES ? "github_pages" : undefined,
    ...({
      baseURL: BASE,
      prerender: {
        crawlLinks: true,
        failOnError: false,
        routes: ["/", "/404.html"],
      },
    } as Record<string, unknown>),
  },
});
