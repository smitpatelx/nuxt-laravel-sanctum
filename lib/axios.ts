import axiosDefault from "axios";
import { getCsrfToken } from "./auth";

const config = useRuntimeConfig();

export const axios = axiosDefault.create({
  withCredentials: true,
  baseURL: config.public.backendBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

axios.interceptors.request.use((requestConfig) => {
  const newConfig = { ...requestConfig };
  newConfig.headers['x-xsrf-token'] = getCsrfToken();
  return newConfig;
});
