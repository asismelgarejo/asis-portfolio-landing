import { Box, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  height: `calc(100vh - ${measuresHeader.build().height}px)`,
  gridTemplateColumns: "1fr 1fr",
  overflow: "hidden",
  ".Image": {
    width: "80%",
    height: "auto",
    margin: "auto",
  },
  ".Content": {
    height: "auto",
    margin: "auto",
  },
}));
