"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import type { RootState } from "@/app/store";
import { logout as logoutAction } from "../store/authSlice";
import { clearAuthTokens } from "../utils/authHelpers";
import { authApi } from "../services/authApi";

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const authState = useSelector((state: RootState) => state.auth);

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout API failed:", error);
    } finally {
      clearAuthTokens();
      dispatch(logoutAction());
      router.push("/login");
    }
  };

  const requireAuth = (redirectUrl?: string) => {
    if (!authState.isAuthenticated) {
      if (redirectUrl) {
        sessionStorage.setItem("intendedUrl", redirectUrl);
      }
      router.push("/login");
      return false;
    }
    return true;
  };

  return {
    ...authState,
    logout,
    requireAuth,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
  };
};
