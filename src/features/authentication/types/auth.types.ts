// Base user interface
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "customer" | "admin" | "vendor";
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Login form data
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// Authentication state
export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Form validation errors
export interface ValidationErrors {
  email?: string;
  password?: string;
  general?: string;
}
