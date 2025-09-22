import { AUTH_STORAGE_KEYS } from "../constants/authConstants";
import type { User } from "../types";

// Token management
export const storeAuthTokens = (
  accessToken: string,
  refreshToken: string
): void => {
  localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
};

export const getStoredAccessToken = (): string | null => {
  return localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
};

export const getStoredRefreshToken = (): string | null => {
  return localStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
};

export const clearAuthTokens = (): void => {
  localStorage.removeItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(AUTH_STORAGE_KEYS.USER_DATA);
};

// User data management
export const storeUserData = (user: User): void => {
  localStorage.setItem(AUTH_STORAGE_KEYS.USER_DATA, JSON.stringify(user));
};

export const getStoredUserData = (): User | null => {
  try {
    const userData = localStorage.getItem(AUTH_STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  } catch {
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getStoredAccessToken();
};

// Format user display name
export const getUserDisplayName = (user: User): string => {
  return user.name || user.email.split("@")[0];
};
