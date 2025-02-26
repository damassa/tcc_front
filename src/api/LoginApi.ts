// import { AxiosError } from 'axios';
// import api from './api';

// class UserHttpService {
//   private api = api;
//   private async handleRequest<T>(callback: () => Promise<any>, errorMessage: string): Promise<T> {
//     try {
//       const request = await callback();
//       return request.data as T;
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         throw new Error(errorMessage);
//       }
//       throw error;
//     }
//   }

//   async signIn(data: any): Promise<any> {
//     return this.handleRequest<any>(() => this.api.post('/api/v1/login', data), 'SIGNIN_ERROR');
//   }
  // import { getAxiosConfig } from './api';
  // import { User } from '../types/user';

  // export const login = async (email: string, password: string): Promise<User> => {
  //   const res = await axios.post(
  //     `${import.meta.env.VITE_API_URL}login`,
  //     {
  //       email,
  //       password,
  //     },
  //     getAxiosConfig(),
  //   );
  //   return res.data;
  // };

  // export const logout = async (): Promise<void> => {
  //   await axios.post(`${import.meta.env.VITE_API_URL}logout`, getAxiosConfig());
  // };
}
