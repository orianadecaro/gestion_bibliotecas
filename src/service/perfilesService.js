import axiosInstance from "../api/axios.js";

export const getAllPerfiles = async () => {
  try {
    const response = await axiosInstance.get("/perfiles");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfiles:", error);
  }
};

export const getPerfilesById = async (id) => {
  try {
    const response = await axiosInstance.get(`/perfiles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfiles:", error);
  }
};

export const createPerfiles = async (data) => {
  try {
    const response = await axiosInstance.post("/perfiles", data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfiles", error);
  }
};

export const updatePerfiles = async (data) => {
  try {
    const response = await axiosInstance.put(`/perfiles/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfiles:", error);
  }
};

export const deletePerfiles = async (id) => {
  try {
    const response = await axiosInstance.delete(`/perfiles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfiles:", error);
  }
};
