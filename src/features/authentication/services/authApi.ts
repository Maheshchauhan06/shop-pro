import { apiClient } from "./apiClient";
import type { LoginRequest, LoginResponse, GoogleAuthResponse } from "../types";

export const authApi = {
  // Login with email and password
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    return apiClient.post<LoginResponse>("/auth/login", credentials);
  },

  // Login with Google
  googleAuth: async (googleToken: string): Promise<GoogleAuthResponse> => {
    return apiClient.post<GoogleAuthResponse>("/auth/google", {
      token: googleToken,
    });
  },

  // Logout
  logout: async (): Promise<void> => {
    return apiClient.post<void>("/auth/logout");
  },

  // Refresh access token
  refreshToken: async (
    refreshToken: string
  ): Promise<{ accessToken: string }> => {
    return apiClient.post<{ accessToken: string }>("/auth/refresh", {
      refreshToken,
    });
  },

  // Verify email
  verifyEmail: async (token: string): Promise<void> => {
    return apiClient.post<void>("/auth/verify-email", { token });
  },

  // Request password reset
  forgotPassword: async (email: string): Promise<void> => {
    return apiClient.post<void>("/auth/forgot-password", { email });
  },
};
