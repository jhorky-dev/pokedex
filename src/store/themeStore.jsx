import { create } from "zustand";
import { Dark, Light } from "../styles/theme";

export const useThemeStore = create((set) => ({
  theme: "dark",
  themeStyle: Dark,
  setTheme: (status) =>
    set({ theme: status.theme === "dark" ? "light" : "dark" }),
  setThemeStyle: (status) =>
    set({ themeStyle: status.themeStyle === "dark" ? Dark : Light }),
}));
