
import { create } from "zustand";
import type { UserType } from "@/lib/types/user";

// task
// make the username appear again in the header and settings page because without zustand it disappered

type AuthState = {
  user: UserType | null,
  setUser: (user: UserType | null ) => void,
  clearUser: () => void,
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))