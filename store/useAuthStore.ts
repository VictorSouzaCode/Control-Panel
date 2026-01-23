'use client'

import { create } from "zustand";
import { persist} from "zustand/middleware"
import { LoginResponse } from "@/lib/api/auth";

type AuthState = {
  user: LoginResponse | null;
  isAuthenticated: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      logout: () => {
        document.cookie = "auth_token=; path=/; max-age=0";
        set({
          user: null,
          isAuthenticated: false,
        });
      }
        
    }),
    {
      name: "auth-store",
    }
  )
)