import { Box, styled } from "@mui/material";
import { template } from "src/toolbox";

export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
//   width: "100%",
  height: "calc(100vh - 50px)",
  gridTemplateColumns: "1fr 1fr",
  overflow: "hidden",
  ...template.paddings,
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
