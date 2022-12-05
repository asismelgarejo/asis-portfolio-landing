import {
  Box,
  styled,
  BoxProps,
  TypographyProps,
  Typography,
} from "@mui/material";
import { template } from "src/toolbox";

template.setAll();
template.pL = 0;
template.pR = 0;
export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<BoxProps>(({ theme }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "180px",
  alignItems: "center",
  ...template.paddings,
  ".Links": {
    margin: "1em 0",
  },
  ".Links .Link": {
    margin: "0 1em",
  },
  ".SocialNetworks": {
    margin: "20px 0",
    display: "flex",
    maxWidth: "500px",
    fontSize: "4em",
  },
  ".Copyright": {
    margin: "2em 0 0",
  },
}));

export const SocialNetwork = styled(
  Typography,
  {}
)<TypographyProps>(({ theme }) => ({
  margin: "0 20px",
  width: "60px",
  height: "60px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  background: theme.palette.common.white,
  borderRadius: "50%",
  ".Item": {
    fontSize: "2em",
  },
}));
