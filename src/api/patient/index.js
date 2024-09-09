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

export const InsertNewsPatients = async (data) => {
  try {
    const response = await axiosIntance.post("patients/", data)
    return {
      success: true,
      message: "Paciente creado con exito",
      data: response.data
    };
  } catch (error) {
    console.log(error);
    return {
      success: false, 
      message: "Error al Registrar al Paciente"
    };
  }
}

export const UpdatePatients = async (data, id) => {
  try {
    const response = await axiosIntance.put(`patients/${id}/`, data);
    return {
      success: true,
      message: "Paciente Modificado con exito",
      data: response.data
    }
  } catch (error) {
    console.log(error);
    return {
      success: false, 
      message: "Error al Modificar al Paciente"
    };
  }
}
