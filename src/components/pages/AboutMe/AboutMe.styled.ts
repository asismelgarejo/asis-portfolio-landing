import { Box, BoxProps, styled } from "@mui/material";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({

}));
export const ContainerContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "grid",
  height: "calc(100vh - 80px)",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "40px",
  overflow: "hidden",
  marginTop: "40px",
  ".Content": {
    height: "auto",
  },
  ".Image": {
    display: "block",
    maxWidth:"100%",
    maxHeight:"100%",
    width: "auto",
    height: "auto",  },
}));
