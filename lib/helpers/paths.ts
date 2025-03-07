
export const ALL_ROUTE = {
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  profile: '/dashboard/profile',
  projects: '/dashboard/projects',
  timeEntry: '/dashboard/time-entry',
  home: '/',
} as const;

export const AUTH_ROUTES: string[] = [ALL_ROUTE.dashboard, ALL_ROUTE.profile, ALL_ROUTE.projects, ALL_ROUTE.timeEntry];
export const GUEST_ROUTES: string[] = [ALL_ROUTE.login, ALL_ROUTE.register];
