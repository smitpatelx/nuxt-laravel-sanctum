import { ALL_ROUTE, AUTH_ROUTES, GUEST_ROUTES } from "~/lib";
import { useAppStore } from "~/stores/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const pinia = usePinia();

  const appStore = useAppStore(pinia);

  const isAuthenticated = !!appStore.email;

  if (!isAuthenticated && AUTH_ROUTES.includes(to.path)) {
    return navigateTo(ALL_ROUTE.login);
  }
  if (isAuthenticated && GUEST_ROUTES.includes(to.path)) {
    return navigateTo(ALL_ROUTE.dashboard);
  }
});