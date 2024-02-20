import {create} from 'zustand';

export const useDescription = create((set) => ({
  description: 'Experience the ease of accessing and sharing your files with few clicks, streamlining your file management in one cohesive space.',
  setDescription: (description) => set({ description: description }),
}));