import { create } from "zustand";
const apiUrl = import.meta.env.VITE_API_URL;

// console.log("API URL:", apiUrl);

export const useDressStore = create((set) => ({
  dresses: [],
  setDresses: (dresses) => set({ dresses }),
  // Function to fetch dresses from the API
  fetchDresses: async () => {
    try {
      const response = await fetch(`${apiUrl}/api/dresses`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ dresses: data.dresses });
    } catch (error) {
      console.error("Failed to fetch dresses:", error);
    }
  }
}));
