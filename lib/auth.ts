import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: (token: string) =>
    set(() => {
      localStorage.setItem("token", token);
      return { token, isLoggedIn: true };
    }),
  logout: () =>
    set(() => {
      localStorage.removeItem("token");
      return { token: null, isLoggedIn: false };
    }),
}));
