
import { create } from "zustand";
import type { UserType } from "@/lib/types/user";

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