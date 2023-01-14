import { Box, BoxProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "6em 0",
  ...getBoxModel(theme).padding.pL().pR().build(),
  [theme.breakpoints.up("sm")]: {
    minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
    ...getBoxModel(theme).padding.pL(0).pR(0).build(),
  },
}));
export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  columnGap: "10px",
  ".Lottie": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gridColumn: "1 / -1",
    // gridRow: "1 / 2",
  },
  ".Lottie .LottieItem": {
    width: "30%",
  },
  ".ContactForm": {
    gridColumn: "1 / -1",
    // gridRow: "2 / -1",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    ".Lottie": {
      gridColumn: "2 / -1",
    },
    ".Lottie .LottieItem": {
      width: "80%",
    },
    ".ContactForm": {
      gridColumn: "1 / 2",
    },
  },
}));
export const ContactForm = styled(Box)<BoxProps>(({ theme }) => ({
  background: theme.palette.background.default,
}));
export const FormFields = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: "1em",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(20px, auto)",
  rowGap: "20px",
}));
