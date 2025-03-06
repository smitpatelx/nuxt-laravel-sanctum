import { processSanctumErrors } from "./helpers";
import { axios } from "~/lib";
import type { LoginFlow, RegisterFlow } from "./type";

function getCookie(cname: string): string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const getCsrfToken = (): string | undefined => {
  return getCookie("XSRF-TOKEN");
}

export const initializeLoginFow = async (data: LoginFlow | undefined) => {
  const { login } = useSanctumAuth();

  if (!data) {
    throw new Error('No data provided');
  }

  return login(data).catch(processSanctumErrors);
};

export const initializeRegisterFlow = async (data: RegisterFlow | undefined) => {
  return axios.post('/api/register', data).catch(processSanctumErrors);
};

export const getCurrentUser = async () => {
  return axios.get('/api/user').catch(processSanctumErrors);
};

export const updateCurrentUser = async (data: {
  name: string;
  email: string;
}) => {
  return axios.put('/api/user', data).catch(processSanctumErrors);
}
