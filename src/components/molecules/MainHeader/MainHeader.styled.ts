import { AppBar, Box, styled, BoxProps, AppBarProps } from "@mui/material";
import { template } from "src/toolbox";

type CustomAppBar = AppBarProps & { scrolled: boolean };
export const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<CustomAppBar>(({ theme, scrolled }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
  backdropFilter: "blur(15px);",
  ...(scrolled
    ? {
        background: "rgba(41,41,41,.3)",
      }
    : {}),
}));
export const CustomToolbar = styled(Box)(({ theme }) => ({
  height: "70px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  ...template.paddings,
}));

export const Menus = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  height: "100%",
  display: "flex",
  alignItems: "center",
}));

type MenuProps = BoxProps & {
  active: boolean;
};

export const Menu = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<MenuProps>(({ theme, active }) => ({
  padding: "0 1em",
  height: "100%",
  ...(active
    ? {
        background: theme.palette.secondary.main,
      }
    : {}),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
