import axios from "axios";
export const BASE_URL = "https://api-gestion-bibliotecas.vercel.app";
export const AUTH_TOKEN = "tu_secreto_para_jwt";

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);
axiosInstance.interceptors.request.use((config) => {
  // Intentar obtener el tokenSocio primero
  const tokenSocio = localStorage.getItem("tokenSocio");
  const tokenUser = localStorage.getItem("token");

  if (tokenSocio) {
    config.headers.Authorization = `Bearer ${tokenSocio}`;
  } else if (tokenUser) {
    config.headers.Authorization = `Bearer ${tokenUser}`;
  }

  return config;
});

export default axiosInstance;
