import axiosDefault from "axios";

export const getAxios = () => {
  const config = useRuntimeConfig();

  return axiosDefault.create({
    withCredentials: true,
    baseURL: config.public.backendBaseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
}
