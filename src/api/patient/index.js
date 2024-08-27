import axiosIntance from "../auth/axiosConfig";

export const getAllPatients = async () => {
  try {
    const response = await axiosIntance.get("patients/");
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message:
        "Error al Obtener los datos",
    };
  }
};
