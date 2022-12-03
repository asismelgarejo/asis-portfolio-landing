import { defaultTheme } from "./defaultTheme";
import { darkTheme } from "./darkTheme";
import { createTheme } from "@mui/material";

export const themes = {
  defaultTheme,
  darkTheme,
};

export type ThemesModes = keyof typeof themes;

export const getTheme = (theme: ThemesModes) => createTheme(themes[theme]);
