import axios from 'axios';
import { mockLogin, mockRegister } from './mockAuth';

const API_URL = 'http://localhost:3000/api';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export interface RegisterResponse {
  message: string;
}

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await axios.post(`${API_URL}/auth/logout`);
  },

  getCurrentUser: async (): Promise<AuthResponse['user']> => {
    const response = await axios.get(`${API_URL}/auth/me`);
    return response.data;
  }
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await mockLogin(email, password);
    localStorage.setItem('token', response.token);
    return response;
  } catch (error) {
    throw new Error('登录失败，请检查邮箱和密码');
  }
};

export const register = async (email: string, password: string): Promise<RegisterResponse> => {
  try {
    return await mockRegister(email, password);
  } catch (error) {
    throw new Error('注册失败，该邮箱已被注册');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token');
}; 