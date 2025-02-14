import { processSanctumErrors } from "./helpers";
import { getAxios } from "~/lib";
import type { LoginFlow, RegisterFlow } from "./type";

export const getCsrfToken = (): string | undefined => {
  const xsrfToken = document.cookie
    ?.split(";")
    ?.find((c) => c.trim().startsWith("XSRF-TOKEN="));
  const csrfToken = xsrfToken?.split("=")[1]
    ? decodeURIComponent(xsrfToken.split("=")[1])
    : undefined;
  return csrfToken;
}

export const initializeLoginFow = async (data: LoginFlow | undefined) => {
  const { login } = useSanctumAuth();

  if (!data) {
    throw new Error('No data provided');
  }

  return login(data).catch(processSanctumErrors);
};

export const initializeRegisterFlow = async (data: RegisterFlow | undefined) => {
  const csrfToken = getCsrfToken();

  const res = await getAxios().post('/api/register', data, {
    headers: {
      'x-xsrf-token': csrfToken,
    },
  }).catch(processSanctumErrors);
  return res;
};
