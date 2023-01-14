import { Box, BoxProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measures = new WebsiteMeasureBuilder().pL().pR();

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    "& .hide-in-xs": {
      display: "none !important",
    },
  },
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
    ...getBoxModel(theme).margin.mBT().build(),
  },
  ".m-t-t": {
    ...getBoxModel(theme).margin.mTT().build(),
  },
}));
export const Children = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "auto",
  gridAutoRows: "auto",
  columnGap: "40px",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "65px auto",
  },
  [theme.breakpoints.up("sm")]: {
    ...getBoxModel(theme).padding.pL().pR().build(),
  },
  // "&": {
  //   ...getBoxModel(theme).padding.pL().pR().build(),
  // },
}));
