import axiosInstance from "../api/axios.js";

export const getAllLibros = async () => {
  try {
    const response = await axiosInstance.get("/libros");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el libros:", error);
  }
};

export const getLibrosById = async (id) => {
  try {
    const response = await axiosInstance.get(`/libros/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el libros:", error);
  }
};

export const createLibros = async (data) => {
  try {
    const response = await axiosInstance.post("/libros", data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el libros", error);
  }
};

export const updateLibros = async (data) => {
  try {
    const response = await axiosInstance.put(`/libros/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el libros:", error);
  }
};

export const deleteLibros = async (id) => {
  try {
    const response = await axiosInstance.delete(`/libros/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el libros:", error);
  }
};
