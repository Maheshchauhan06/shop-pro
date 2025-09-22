export const AUTH_STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER_DATA: "userData",
} as const;

export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: "Welcome back! You have been logged in successfully.",
  LOGIN_FAILED: "Invalid email or password. Please try again.",
  LOGOUT_SUCCESS: "You have been logged out successfully.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  NETWORK_ERROR: "Network error. Please check your connection.",
} as const;

export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "Email is required",
  EMAIL_INVALID: "Please enter a valid email address",
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_MIN_LENGTH: "Password must be at least 6 characters",
} as const;

export const GOOGLE_AUTH_CONFIG = {
  CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  SCOPES: ["email", "profile"],
} as const;
