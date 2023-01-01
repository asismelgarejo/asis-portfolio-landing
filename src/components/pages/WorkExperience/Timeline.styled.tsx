import { Box, Stack, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
// const measuresTitleT = new WebsiteMeasureBuilder().mTitleT();

export const Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  // ...measuresTitleT.build(),
}));
const offset = "-10px"
export const CardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "900px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".Connection": {
    width: "40px",
    borderTop: `4px dashed ${theme.palette.success.light}`,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "50%",
    border: `solid ${theme.palette.success.light}`,
  },
  "&:nth-of-type(odd)": {
    padding: "50px 0 50px 50px",
    flexFlow: "row",
  },
  "&:nth-of-type(even)": {
    padding: "50px 50px 50px 0",
    flexFlow: "row-reverse",
  },
  "&:nth-of-type(odd)::before": {
    left: "0px",
    borderWidth: "10px 0 10px 10px",
    borderRadius: "50% 0 0 50%",
    top: offset,
    bottom: "0",
  },
  "&:nth-of-type(even)::before": {
    right: 0,
    top: offset,
    bottom: "0",
    borderWidth: "10px 10px 10px 0",
    borderRadius: "0 50% 50% 0",
  },
  "&:first-child:before": {
    borderTop: "0",
    borderTopLeftRadius: 0,
  },
  "&:last-child:nth-of-type(odd):before": {
    borderBottom: "0",
    borderBottomLeftRadius: 0,
  },
  "&:last-child:nth-of-type(even):before": {
    borderBottom: "0",
    borderBottomRightRadius: 0,
  },
}));
export const CardInfo = styled(Stack)(({ theme }) => ({
  minWidth: "180px",
  minHeight: "auto",
  position: "relative",
  width: "20vw",
  background: "#009ADA",
  // background: theme.palette.secondary.main,
  borderRadius: "50%",
  "&:before":{
    content: "''",
    paddingTop: "100%",
  },
  ".Inner":{
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    width: "100%",
    height: "100%",
  },
  ".Image": {
    width: "50%",
  },
}));
