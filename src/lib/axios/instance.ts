import { NEXT_PUBLIC_API_URL } from "@/config/env";
import axios from "axios";

const api = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);

export default api;
