import type { AccountData } from "./type";

export const getSanctumAuth = () => {
  const authUser = useSanctumUser<AccountData | null>();
  return authUser;
}
