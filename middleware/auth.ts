import { useAppStore } from "~/stores/app";

const ALL_ROUTE = {
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  home: '/',
} as const;

const AUTH_ROUTES: string[] = [ALL_ROUTE.dashboard];
const GUEST_ROUTES: string[] = [ALL_ROUTE.login, ALL_ROUTE.register];

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