import { Box, BoxProps, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
}));
export const ContainerContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  columnGap: "40px",
  overflow: "hidden",
  marginTop: "40px",
  ".Content": {
    height: "auto",
    marginBottom: "1em",
  },
  ".ImageContainer": {
    display: "block",
    margin: 0,
    width: "100%",
    height: "300px",
    marginLeft: "unset",
    overflow: "hidden",
  },
  ".Image": {
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    ".Content": {
      marginBottom: "0",
    },
    ".ImageContainer": {
      width: "90%",
      marginLeft: "auto",
      height: "auto",
    },
  },
}));
