import { Box, BoxProps, styled } from "@mui/material";
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
export const ContainerMobile = styled(Box)<BoxProps>(({ theme }) => ({
  width: "calc(100vw)",
  margin: "auto",
  ".SwiperSlide": {
    ...getBoxModel(theme).padding.pL().pR().build(),
  },
  ".CardWE":{
    display: "grid",
    gridTemplateColumns: "auto 20px 60%",
    width: "100%"
  },
  ".Image":{
    width: "100%",
    height: "auto",
  }
}));
