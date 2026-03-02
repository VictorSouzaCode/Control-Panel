
import { create } from "zustand";
import { persist} from "zustand/middleware"
import type { LoginResponse } from "@/lib/types/auth";

// task
// make the username appear again in the header and settings page because without zustand it disappered

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