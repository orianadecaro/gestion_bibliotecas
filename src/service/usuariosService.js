import axiosInstance from "../api/axios.js";

export const getAllUsuarios = async () => {
  try {
    const response = await axiosInstance.get("/usuarios");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuarios:", error);
  }
};

export const getUsuariosById = async (id) => {
  try {
    const response = await axiosInstance.get(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuarios:", error);
  }
};

export const createUsuarios = async (data) => {
  try {
    const response = await axiosInstance.post("/usuarios", data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuarios", error);
  }
};

export const updateUsuarios = async (data) => {
  try {
    const response = await axiosInstance.put(`/usuarios/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuarios:", error);
  }
};

export const deleteUsuarios = async (id) => {
  try {
    const response = await axiosInstance.delete(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuarios:", error);
  }
};
