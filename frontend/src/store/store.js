import create from 'zustand';
import { persist } from 'zustand/middleware';

export const MISSION_TYPE = {
  PHOTO: 'PHOTO',
  TEXT: 'TEXT',
  GPS: 'GPS',
};

export const SORT = {
  NONE: 'NONE',
  TITLE_ASC: 'TITLE_ASC',
};

export const useStore = create(
  persist((set) => ({
    sort: SORT.NONE,
    setSort: (sort) => set({ sort }),
    filteredTypes: [],
    addFilteredType: (type) =>
      set((state) => ({ filteredTypes: [...state.filteredTypes, type] })),
    removeFilteredType: (type) =>
      set((state) => ({
        filteredTypes: state.filteredTypes.filter((t) => t !== type),
      })),
  })),
  {
    name: 'gc-take-home',
  }
);
