import { VALIDATION_MESSAGES } from "../constants/authConstants";
import type { LoginFormData, ValidationErrors } from "../types";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate individual fields
export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return VALIDATION_MESSAGES.EMAIL_REQUIRED;
  }
  if (!EMAIL_REGEX.test(email)) {
    return VALIDATION_MESSAGES.EMAIL_INVALID;
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return VALIDATION_MESSAGES.PASSWORD_REQUIRED;
  }
  if (password.length < 6) {
    return VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH;
  }
  return null;
};

// Validate entire login form
export const validateLoginForm = (data: LoginFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(data.password);
  if (passwordError) errors.password = passwordError;

  return errors;
};

// Check if form has any validation errors
export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
