import { AppBar, Box, styled, BoxProps } from "@mui/material";
import { template } from "src/toolbox";

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  width: 50,
  minHeight: 200,
  background: theme.palette.primary.main,
  alignItems: "center",
  justifyContent: "center",
}));
export const CustomToolbar = styled(Box)(({ theme }) => ({
  height: "70px",
  display: "flex",
  alignItems: "center",
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
