import { Box, BoxProps, Card, CardProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
// const measures = new WebsiteMeasureBuilder().mB().mT();
// const measuresTitle = new WebsiteMeasureBuilder().mTitleB();
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
// const measuresTitleT = new WebsiteMeasureBuilder().mTitleT();

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
export const Cards = styled(Box)<any>(({ theme }) => ({
  // ...measuresTitleT.build(),
  display: "grid",
  height: "fit-content",
  gridTemplateColumns: "repeat(1, 1fr minmax(40px, auto)) 1fr",
  gridTemplateRows: "minmax(80px, auto)",
  rowGap: "40px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr minmax(40px, auto)) 1fr",
  },
}));

export const ContainerMobile = styled(Box)<BoxProps>(({ theme }) => ({
  width: "calc(100vw)",
  margin: "auto",
  ".SwiperSlide": {
    ...getBoxModel(theme).padding.pL().pR().build(),
  },
}));
export const ProjectCardStyled = styled(Card)<any>(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  textAlign: "left",
  "&:nth-of-type(2n+1)": {
    gridColumn: "1 / 2",
  },
  "&:nth-of-type(2n+2)": {
    gridColumn: "3 / 4",
  },
  ".Buttons": {
    display: "grid",
    gridTemplateColumns: "1fr minmax(30px, auto) 1fr",
    width: "100%",
  },
  ".Buttons .Button:nth-of-type(odd)": {
    gridColumn: "1 / 2",
  },
  ".Buttons .Button:nth-of-type(even)": {
    gridColumn: "3 / 4",
  },

  [theme.breakpoints.up("md")]: {
    "&:nth-of-type(3n+1)": {
      gridColumn: "1 / 2",
    },
    "&:nth-of-type(3n+2)": {
      gridColumn: "3 / 4",
    },
    "&:nth-of-type(3n+3)": {
      gridColumn: "5 / 6",
    },
  },
}));
