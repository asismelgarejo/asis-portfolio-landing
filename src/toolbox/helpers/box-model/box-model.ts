import { Theme, useTheme } from "@mui/material";
import { Margin } from "./margin";
import { Padding } from "./padding";

export const getBoxModel = (theme: Theme) => {
  const padding = new Padding(theme);
  const margin = new Margin(theme);
  return {
    padding,
    margin,
  };
};
