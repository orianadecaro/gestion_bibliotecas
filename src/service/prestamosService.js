import axiosInstance from "@/pages/api/axios";

export const getAllPrestamos = async () => {
  try {
    const response = await axiosInstance.get("/prestamos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos:", error);
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
  try {
    const response = await axiosInstance.post("/prestamos", data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el prestamos", error);
  }
};

export const updatePrestamos = async (data) => {
  try {
    const response = await axiosInstance.put(`/prestamos/${data.Id}`, data);
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
