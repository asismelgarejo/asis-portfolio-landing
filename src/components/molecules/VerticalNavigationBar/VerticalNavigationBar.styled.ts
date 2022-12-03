import { Box, BoxProps, styled } from "@mui/material";
import { template } from "src/toolbox";

export const Container = styled(Box)(({ theme }) => ({
  width: 50,
  // minHeight: 200,
  background: theme.palette.grey[300],
  position: "fixed",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 50px",
  rowGap: "1px",
  margin: "auto 0",
  left: template.gSize,
  bottom: "25%",
  alignItems: "center",
  padding: 0,
  ".Setting": {
    background: theme.palette.primary.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
}));

export const Menus = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  padding: ".5em 0",
  background: theme.palette.primary.dark,
  height: "auto",
}));

type MenuProps = BoxProps & {
  active: boolean;
};

export const Menu = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<MenuProps>(({ theme, active }) => ({
  background: theme.palette.background.paper,
  borderRadius: "50%",
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
