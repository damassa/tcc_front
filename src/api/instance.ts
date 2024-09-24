import axios from "axios";

export const api = axios.create({
    baseURL: "localhost:8080/api/v1",
    withCredentials: true
});