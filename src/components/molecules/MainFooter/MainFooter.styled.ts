import {
  Box,
  styled,
  BoxProps,
  TypographyProps,
  Typography,
} from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
// const measures = new WebsiteMeasureBuilder().pB().pT().pL().pR();
export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<BoxProps>(({ theme }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "180px",
  alignItems: "center",
  ".Links": {
    margin: "1em 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".Links .Link": {
    margin: "0 1em",
    width: "fit-content",
  },
  ".Links .Link:first-of-type": {
    marginLeft: "0",
  },
  ".Links .Link:last-child": {
    marginRight: "0",
  },
  ".SocialNetworks": {
    margin: "20px 0",
    maxWidth: "500px",
    fontSize: "1em",
    display: "flex",
    // justifyContent: "center",
  },
  ".Copyright": {
    margin: "2em 0 0",
  },
}));

export const SocialNetwork = styled(
  Box,
  {}
)<BoxProps & { href?: string, target?: string }>(({ theme }) => ({
  margin: "0 15px",
  width: "2.5em",
  height: "2.5em",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  fontSize: "inherit",
  background: theme.palette.common.white,
  borderRadius: "50%",
  ".Item": {
    fontSize: "1.5em",
  },
  [theme.breakpoints.up("sm")]: {
    margin: "0 10px",
    width: "3.75em",
    height: "3.75em",
    ".Item": {
      fontSize: "2em",
    },
  },
}));
