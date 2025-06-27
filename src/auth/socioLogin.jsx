import axiosInstance from "../api/axios.js";

export const socioLoginRequest = async (data) => {
  try {
    const response = await axiosInstance.post("/socios/login", data);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};
