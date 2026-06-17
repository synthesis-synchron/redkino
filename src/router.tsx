import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Должно совпадать с base в vite.config.ts. На GitHub Pages сайт живёт под /redkino/.
const BASE_PATH = "/redkino";

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
