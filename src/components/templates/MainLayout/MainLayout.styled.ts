import { Box, BoxProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measures = new WebsiteMeasureBuilder().pL().pR();

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: theme.palette.background.default,
  [theme.breakpoints.up("xs")]:{
    "& .hide-in-xs":{
      display: "none",
    },
  },
  [theme.breakpoints.up("sm")]:{
    "& .hide-in-xs":{
      display: "unset",
    },
  },
  // [theme.breakpoints.up("md")]:{
  //   ".hide-in-xs":{
  //     display: "none",
  //   },
  // },
  // [theme.breakpoints.up("lg")]:{
  //   ".hide-in-xs":{
  //     display: "none",
  //   },
  // },
  ".p-l": {
    ...getBoxModel(theme).padding.pL().build(),
  },
  ".p-t": {
    ...getBoxModel(theme).padding.pT().build(),
  },
  ".p-b": {
    ...getBoxModel(theme).padding.pB().build(),
  },
  ".p-r": {
    ...getBoxModel(theme).padding.pR().build(),
  },
  ".m-b-t": {
    ...getBoxModel(theme).margin.marginBottomTitle,
  },
  ".m-t-t": {
    ...getBoxModel(theme).margin.marginTopTitle,
  },
}));
export const Children = styled(Box)<BoxProps>(({ theme }) => ({
  // minHeight: "1000px",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "auto",
  gridAutoRows: "auto",
  columnGap: "40px",

  [theme.breakpoints.up("md")]:{
    gridTemplateColumns: "auto auto",
  },
  "&": {
    ...getBoxModel(theme).padding.pL().pR().build(),
  },

}));
