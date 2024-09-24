export interface LoginResponse {
    token: string;
    userID: number;
    email: string;
    name: string;
}

export interface RegisterResponse {
    name: string;
    email: string;
    password: string;
}