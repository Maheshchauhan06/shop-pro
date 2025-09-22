"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authApi } from "../services/authApi";
import { loginSuccess, loginFailure } from "../store/authSlice";
import { storeAuthTokens, storeUserData } from "../utils/authHelpers";
import { AUTH_MESSAGES } from "../constants/authConstants";
import type { LoginRequest } from "../types";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginRequest) => authApi.login(credentials),
    onSuccess: (response) => {
      const { user, token, refreshToken } = response.data;

      // Store tokens and user data
      storeAuthTokens(token, refreshToken);
      storeUserData(user);

      // Update Redux state
      dispatch(loginSuccess({ user, token, refreshToken }));

      // Show success message (you might use a toast library)
      console.log(AUTH_MESSAGES.LOGIN_SUCCESS);

      // Redirect to dashboard or intended page
      const intendedUrl = sessionStorage.getItem("intendedUrl") || "/";
      sessionStorage.removeItem("intendedUrl");
      router.push(intendedUrl);
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || AUTH_MESSAGES.LOGIN_FAILED;
      dispatch(loginFailure(errorMessage));
      console.error("Login failed:", errorMessage);
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
    isError: loginMutation.isError,
  };
};
