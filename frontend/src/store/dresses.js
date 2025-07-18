import { create } from "zustand";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

// console.log("API URL:", apiUrl);

export const useDressStore = create((set) => ({
  dresses: [],
  setDresses: (dresses) => set({ dresses }),
  // Function to fetch dresses from the API
  fetchDresses: async () => {
    try {
      // console.log("Fetching from:", `${apiUrl}/api/dresses`);
      const response = await fetch(`${apiUrl}/api/dresses`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log("Fetched data:", data);
      set({ dresses: data.dresses });
    } catch (error) {
      console.error("Failed to fetch dresses:", error);
    }
  }
}));
