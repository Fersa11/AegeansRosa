import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: { isAdmin: true }, // Change to true to simulate admin
  loginAsAdmin: () => set({ user: { isAdmin: true } }),
  logout: () => set({ user: { isAdmin: false } })
}));
