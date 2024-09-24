import { AxiosError } from "axios";
import { api } from "../../api/instance";

let myInterceptor: number | null = null;

export function useInterceptor() {
    if (myInterceptor !== null) {
        api.interceptors.request.eject(myInterceptor);
    }

    myInterceptor = api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                if (error.response.data === "Token inválido") {
                    alert("SESSÃO EXPIRADA");
                    window.location.href = "/";
                }
            }

            return Promise.reject(error);
        }
    );
}

export function ejectInterceptor() {
    if (myInterceptor !== null) {
        api.interceptors.request.eject(myInterceptor);
        myInterceptor = null;
    }
}