import { Box, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  gridTemplateColumns: "1fr",
  //Adding global padding
  ...getBoxModel(theme).padding.pL().pR().build(),
  columnGap: "20px",
  alignContent: "center",
  width: "100%",
  ".Image":{
    width: "100%",
    height: "auto",
  },
  ".ImageContainer": {
    width: "100%",
    height: "300px",
    margin: "auto auto 16px",
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
    gridTemplateColumns: "1fr 1fr",
    // columnGap: "40px",
    ".Content": {
      textAlign: "left !important",
    },
    ".ImageContainer": {
      width: "100%",
      height: "auto !important",
      margin: "auto",
    },
    ".Buttons": {
      justifyContent: "unset !important",
    },
  },
  [theme.breakpoints.up("md")]: {
    ".ImageContainer": {
      width: "90%",
      height: "auto",
      margin: "auto auto 0 0",
    },
  },
}));
