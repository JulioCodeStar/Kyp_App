import axiosIntance from "./axiosConfig";

export const login = async (credentials) => {
  try {
    const response = await axiosIntance.post('token/', credentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
