import { User } from "./auth.types";

// API response types
export interface LoginResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
    refreshToken: string;
  };
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface GoogleAuthResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
    isNewUser: boolean;
  };
}
