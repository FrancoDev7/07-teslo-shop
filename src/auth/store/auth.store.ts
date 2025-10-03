import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

type AuthState = {
  // Propiedades
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;

  // Métodos
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  // Implementacion del Store
  user: null,
  token: null,
  authStatus: "checking",

  // Métodos
  login: async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password);
      localStorage.setItem("token", data.token);
      set({ user: data.user, token: data.token });
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      set({ user: null, token: null });
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
