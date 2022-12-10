import { Box, BoxProps, Card, CardProps, styled } from "@mui/material";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: "grid",
  height: "calc(100vh - 80px)",
}));
export const Docs = styled(Box)<any>(({ theme }) => ({
  display: "grid",
  height: "fit-content",
  gridTemplateColumns: "repeat(3, 1fr minmax(40px, auto)) 1fr",
  gridTemplateRows: "minmax(80px, auto)",
  rowGap: "40px",
  marginTop: "40px",
  ".CardDocument:nth-child(4n+1)":{
    gridColumn: "1 / 2"
  },
  ".CardDocument:nth-child(4n+2)":{
    gridColumn: "3 / 4"
  },
  ".CardDocument:nth-child(4n+3)":{
    gridColumn: "5 / 6"
  },
  ".CardDocument:nth-child(4n+4)":{
    gridColumn: "7 / 8"
  },
}));
export const CardDoc = styled(Card)<CardProps>(({ theme }) => ({
  height: "fit-content",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:"center",
  padding: "1.5em 1em"
}));
