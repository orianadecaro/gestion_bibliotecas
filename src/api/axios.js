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
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
