import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "",
  setCategory: (category) => set({ category })
  //   defineCategory: (dressType) => set({ category: dressType }),
  //   resetCategory: () => set({ category: "JACKEN" })
}));
