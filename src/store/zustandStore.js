import { create } from 'zustand';

export const useStore = create((set) => ({
  myLocation: 'dsa',
  locationSet: (data) => set((state) => ({ myLocation: data })),
}));
