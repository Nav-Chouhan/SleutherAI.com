import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("authToken");
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out!");
    } else if (error.response?.status === 401) {
      console.error("Unauthorized! Token might have expired.");
    } else {
      console.error("API error:", error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
