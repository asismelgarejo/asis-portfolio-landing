import { Box, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  gridTemplateColumns: "1fr",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  ".Image":{
    width: "100%",
    height: "auto",
  },
  ".ImageContainer": {
    width: "100%",
    height: "300px",
    margin: "auto",
    overflow: "hidden",
    marginBottom: "16px",
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
    gridTemplateColumns: "1fr 1fr",
    columnGap: "40px",
    ".Content": {
      textAlign: "left",
    },
    ".ImageContainer": {
      width: "100%",
      height: "auto",
      marginBottom: "0",
      margin: "auto",
    },
    ".Buttons": {
      justifyContent: "unset",
    },
  },
  [theme.breakpoints.up("md")]: {
    ".ImageContainer": {
      width: "80%",
      height: "auto",
    },
  },
}));
