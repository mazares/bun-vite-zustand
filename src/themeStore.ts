import { create } from "zustand";

type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "dark",
  setTheme: (theme) => {
    set({ theme });
  },
  toggleTheme: () => {
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" }));
  },
}));
