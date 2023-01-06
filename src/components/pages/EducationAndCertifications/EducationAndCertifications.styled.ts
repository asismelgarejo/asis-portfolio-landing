import { Box, BoxProps, Card, CardProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";

const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  ".TitleSection": {
    //Adding global padding
    ...getBoxModel(theme).padding.pL().pR().build(),
  },
  ".Divider": {
    //Adding global padding
    ...getBoxModel(theme).padding.pL().pR().build(),
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
    ".TitleSection": {
      ...getBoxModel(theme).padding.pL(0).pR(0).build(),
    },
    ".Divider": {
      ...getBoxModel(theme).padding.pL(0).pR(0).build(),
    },
  },
}));
export const Docs = styled(Box)<BoxProps>(({ theme }) => ({
  display: "grid",
  height: "fit-content",
  gridTemplateColumns: "repeat(1, 1fr minmax(40px, auto)) 1fr",
  gridTemplateRows: "minmax(80px, auto)",
  rowGap: "40px",
  //Adding global padding
  ".CardDocument:nth-of-type(2n+1)": {
    gridColumn: "1 / 2",
  },
  ".CardDocument:nth-of-type(2n+2)": {
    gridColumn: "3 / 4",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr minmax(40px, auto)) 1fr",
    ".CardDocument:nth-of-type(3n+1)": {
      gridColumn: "1 / 2",
    },
    ".CardDocument:nth-of-type(3n+2)": {
      gridColumn: "3 / 4",
    },
    ".CardDocument:nth-of-type(3n+3)": {
      gridColumn: "5 / 6",
    },
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr minmax(40px, auto)) 1fr",
    ".CardDocument:nth-of-type(4n+1)": {
      gridColumn: "1 / 2",
    },
    ".CardDocument:nth-of-type(4n+2)": {
      gridColumn: "3 / 4",
    },
    ".CardDocument:nth-of-type(4n+3)": {
      gridColumn: "5 / 6",
    },
    ".CardDocument:nth-of-type(4n+4)": {
      gridColumn: "7 / 8",
    },
  },
}));
export const CardDoc = styled(Card)<CardProps>(({ theme }) => ({
  height: "100%",
  width: "100%",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.5em 1em",
  ".Captions": {
    display: "flex",
    marginTop: "0.3em !important",
    justifyContent: "center",
  },
  // ".Caption": {
  //   fontSize: "1em",
  // },
}));
export const ContainerMobile = styled(Box)<BoxProps>(({ theme }) => ({
  width: "calc(100vw)",
  margin: "auto",
  ".SwiperSlide": {
    ...getBoxModel(theme).padding.pL().pR().build(),
  },
}));
