import axios from "axios";

const api = axios.create({
    baseURL: "localhost:8080/api/v1",
});

api.interceptors.request.use((cfg) => {
    const token = localStorage.getItem("token");

    if(token) {
        cfg.headers.Authorization = `Bearer ${token}`;
        return cfg;
    }
});

export default api;