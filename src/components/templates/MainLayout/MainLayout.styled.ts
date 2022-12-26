import { Box, BoxProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measures = new WebsiteMeasureBuilder().pL().pR();

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: theme.palette.background.default,
}));
export const Children = styled(Box)<BoxProps>(({ theme }) => ({
  // minHeight: "1000px",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridAutoRows: "auto",
  columnGap: "40px",
  ...measures.build(),
  ".p-l": {
    ...getBoxModel(theme).padding.paddingLeft,
  },
  ".p-t": {
    ...getBoxModel(theme).padding.paddingTop,
  },
  ".p-b": {
    ...getBoxModel(theme).padding.paddingBottom,
  },
  ".p-r": {
    ...getBoxModel(theme).padding.paddingRight,
  },
  ".m-b-t": {
    ...getBoxModel(theme).margin.marginBottomTitle,
  },
  ".m-t-t": {
    ...getBoxModel(theme).margin.marginTopTitle,
  },
}));
