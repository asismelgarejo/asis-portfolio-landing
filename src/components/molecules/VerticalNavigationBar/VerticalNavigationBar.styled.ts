import { Box, Tooltip, BoxProps, styled, TooltipProps } from "@mui/material";
import { template } from "src/toolbox";

export const Container = styled(Box)(({ theme }) => ({
  position: "sticky",
  left: 0,
  top: 80,
  bottom: 0,
  height: "calc(100vh - 80px)",
  display: "flex",
  alignItems: "center",
  gridColumn: "1 / 2",
  gridRow: "1 / -1",
}));
export const NavigationBar = styled(Box)(({ theme }) => ({
  fontSize: "1.3em",
  width: "3.125em",
  // minHeight: 200,
  background: theme.palette.grey[300],
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 3.125em",
  rowGap: "1px",
  margin: "auto 0",
  padding: 0,
  alignItems: "center",
  ".Icon": {
    fontSize: "1.5em",
  },
}));
export const Setting = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
}));
export const Menus = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  padding: ".5em 0",
  background: theme.palette.primary.dark,
  height: "auto",
  fontSize: "inherit",
}));

type MenuProps = TooltipProps & {
  active: boolean;
};

export const Menu = styled(Tooltip, {
  shouldForwardProp: (prop) => prop !== "active",
})<MenuProps>(({ theme, active }) => ({
  background: theme.palette.background.paper,
  borderRadius: "50%",
  fontSize: "inherit",
  ...(active
    ? {
        boxShadow: `0 0 2px 3px ${theme.palette.secondary.main}`,
      }
    : {}),

  marginBottom: "1em",
  "&:last-child": {
    marginBottom: "0",
  },
}));
