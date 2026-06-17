// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const BASE = "/redkino/";

export default defineConfig({
  tanstackStart: {
    // Keep SSR wrapper for Lovable sandbox; static export comes from Nitro prerender.
    server: { entry: "server" },
  },
  vite: {
    // Так ассеты в собранном index.html будут ссылаться на /redkino/assets/...
    base: BASE,
  },
  nitro: {
    preset: "github_pages",
    // Тип wrapper-а узкий, поэтому расширяем через каст: baseURL и prerender
    // понимаются Nitro в рантайме.
    ...({
      baseURL: BASE,
      prerender: {
        crawlLinks: true,
        failOnError: false,
        routes: ["/", "/404.html"],
      },
    } as Record<string, unknown>),
    // github_pages пресет сам создаёт .nojekyll и 404.html.
  },
});
