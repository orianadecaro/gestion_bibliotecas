import axiosInstance from "../api/axios.js";

export const getAllPrestamos = async () => {
  try {
    const response = await axiosInstance.get("/prestamos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos:", error);
  }
};

export const getPrestamosBySocioId = async (id) => {
  try {
    const response = await axiosInstance.get(`/socios/historial/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return [];
    }

    // Otros errores, más graves
    console.error("Error al obtener el préstamo:", error);
    throw new Error("Error al obtener préstamos");

  }
};

export const getPrestamosById = async (id) => {
  try {
    const response = await axiosInstance.get(`/prestamos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos:", error);
  }
};

export const createPrestamos = async (data) => {
  console.log("Payload que se envía al backend:", data);
  try {

    const response = await axiosInstance.post("/prestamos", data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos", error);
  }
};

export const updatePrestamos = async (data) => {
  try {
    const response = await axiosInstance.put(`/prestamos/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos:", error);
  }
};

export const deletePrestamos = async (id) => {
  try {
    const response = await axiosInstance.delete(`/prestamos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos:", error);
  }
};
