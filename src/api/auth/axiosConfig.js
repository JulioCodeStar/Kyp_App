import axios from "axios";

const axiosIntance = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosIntance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIntance.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosIntance.post("/token/refresh/", {
          refresh: refreshToken,
        });

        localStorage.setItem("accessToken", response.data.access);
        axiosIntance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access}`;

        return axiosIntance(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosIntance;
