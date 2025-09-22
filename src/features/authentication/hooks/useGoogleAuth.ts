"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authApi } from "../services/authApi";
import { loginSuccess } from "../store/authSlice";
import { storeAuthTokens, storeUserData } from "../utils/authHelpers";

export const useGoogleAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const googleAuthMutation = useMutation({
    mutationFn: (googleToken: string) => authApi.googleAuth(googleToken),
    onSuccess: (response) => {
      const { user, token, isNewUser } = response.data;

      // Store auth data
      storeAuthTokens(token, ""); // Assuming no refresh token for Google auth
      storeUserData(user);

      // Update Redux state
      dispatch(loginSuccess({ user, token, refreshToken: "" }));

      // Redirect based on whether user is new or existing
      const redirectUrl = isNewUser ? "/onboarding" : "/";
      router.push(redirectUrl);
    },
    onError: (error) => {
      console.error("Google authentication failed:", error);
    },
  });

  return {
    googleAuth: googleAuthMutation.mutate,
    isLoading: googleAuthMutation.isPending,
    error: googleAuthMutation.error,
  };
};
