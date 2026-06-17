import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Должно совпадать с base в vite.config.ts. На GitHub Pages — /redkino, в Lovable-превью — /.
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: BASE_PATH,
  });

  return router;
};
