import { Box, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  height: `calc(100vh - ${measuresHeader.build().height}px)`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  //Adding global padding
  ...getBoxModel(theme).padding.pL().pR().build(),
  alignContent: "center",
  width: "100%",
  ".Lottie":{
    width: "90%",
    margin: "auto"
  },
  ".ImageContainer": {
    width: "100%",
    margin: "auto",
    overflow: "hidden",
  },
  ".Content": {
    height: "auto",
    margin: "auto",
    textAlign: "center",
  },
  ".Buttons": {
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    ...getBoxModel(theme).padding.pL(0).pR(0).build(),
    columnGap: "10px",
    gridTemplateColumns: "45% 55%",
    // columnGap: "40px",
    ".Content": {
      textAlign: "left !important",
    },
    ".ImageContainer": {
      width: "100%",
      height: "auto !important",
      margin: "auto",
    },
    ".Lottie":{
      width: "100%",
    },
    ".Buttons": {
      justifyContent: "unset !important",
    },
  },
  [theme.breakpoints.up("md")]: {
    columnGap: "20px",
  },
}));
