// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig(() => {
  const isPages = process.env.PAGES === "1";

  return {
    tanstackStart: isPages
      ? {
          // Отключаем SSR для GitHub Pages и включаем генерацию статики
          prerender: {
            routes: ["/"],
          },
        }
      : {
          server: { entry: "server" },
        },
    vite: {
      base: isPages ? "/redkino/" : "/",
    },
    nitro: isPages
      ? {
          preset: "github-pages",
          baseURL: "/redkino/",
          static: true, // Генерируем только чистую статику без сервера
        }
      : {
          preset: "netlify",
        },
  };
});
