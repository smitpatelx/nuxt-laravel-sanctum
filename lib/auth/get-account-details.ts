import type { AccountData } from "./type";

export const getAuthAccount = () => {
  const authUser = useSanctumUser<AccountData | null>();
  return authUser;
}

// export const requireAuth = () => {
//   const router = useRouter();

//   const authUser = getAuthAccount();
//   const isAuthenticated = authUser.value !== null;

//   if (!isAuthenticated) {
//     router.replace('/login');
//   }
// }

// export const requireGuest = () => {
//   const router = useRouter();

//   const authUser = getAuthAccount();
//   const isAuthenticated = authUser.value !== null;

//   if (isAuthenticated) {
//     router.replace('/dashboard');
//   }
// }