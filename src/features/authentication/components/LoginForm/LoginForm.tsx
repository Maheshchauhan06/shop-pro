"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/shared/components/Ui/Button/Button";
import { Input } from "@/shared/components/Ui/Input/Input";
import { LoadingSpinner } from "@/shared/components/Ui/LoadingSpinner/LoadingSpinner";
import { SocialAuth } from "../SocialAuth/Index";
import { useLogin } from "../../hooks/useLogin";
import {
  validateLoginForm,
  hasValidationErrors,
} from "../../utils/authValidation";
import type { LoginFormData, ValidationErrors } from "../../types";

export const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const { login, isLoading, error: loginError } = useLogin();

  // Real-time validation after first submit attempt
  useEffect(() => {
    if (hasAttemptedSubmit) {
      const validationErrors = validateLoginForm(formData);
      setErrors(validationErrors);
    }
  }, [formData, hasAttemptedSubmit]);

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear specific field error when user starts typing
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    // Validate form
    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) {
      return;
    }

    // Submit login
    login({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
              disabled={isLoading}
              autoComplete="email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              error={errors.password}
              disabled={isLoading}
              autoComplete="current-password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center ">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  handleInputChange("rememberMe", e.target.checked)
                }
                className="rounded border-gray-300 text-red-500 focus:ring-red-500 cursor-pointer"
                disabled={isLoading}
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-red-500 hover:text-red-600 font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Error */}
          {loginError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm">
                {loginError.message || "Login failed. Please try again."}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors  "
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <LoadingSpinner size="sm" className="mr-2" />
                Signing in...
              </div>
            ) : (
              "Sign In"
            )}
          </Button>

          {/* Social Authentication */}
          <SocialAuth />

          {/* Sign Up Link */}
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Create one here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
