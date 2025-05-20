import axiosInstance from "@/pages/api/axios";

export const getAllSocios = async () => {
  try {
    const response = await axiosInstance.get("/socios");
    return response.data;
  } catch (error) {
    console.error("Error al obtener el socios:", error);
  }
};

export const getSociosById = async (id) => {
  try {
    const response = await axiosInstance.get(`/socios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el socios:", error);
  }
};

export const createSocios = async (data) => {
  try {
    const response = await axiosInstance.post("/ibros", data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el socios", error);
  }
};

export const updateSocios = async (data) => {
  try {
    const response = await axiosInstance.put(`/socios/${data.Id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el socios:", error);
  }
};

export const deleteSocios = async (id) => {
  try {
    const response = await axiosInstance.delete(`/socios/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el socios:", error);
  }
};
