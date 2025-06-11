import { create } from "zustand";

export const useDressStore = create((set) => ({
  dresses: [],
  setDresses: (dresses) => set({ dresses }),
  addDress: (dress) => set((state) => ({ dresses: [...state.dresses, dress] })),
  updateDress: (id, updatedDress) =>
    set((state) => ({
      dresses: state.dresses.map((dress) =>
        dress.id === id ? { ...dress, ...updatedDress } : dress
      )
    })),
  deleteDress: (id) =>
    set((state) => ({
      dresses: state.dresses.filter((dress) => dress.id !== id)
    }))
}));
export const useDresses = () => {
  const { dresses, setDresses, addDress, updateDress, deleteDress } =
    useStore();
  return { dresses, setDresses, addDress, updateDress, deleteDress };
};
