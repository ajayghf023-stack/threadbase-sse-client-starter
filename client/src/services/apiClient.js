import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? "" : "http://localhost:3001"),
  withCredentials: true,
});

export default apiClient;
