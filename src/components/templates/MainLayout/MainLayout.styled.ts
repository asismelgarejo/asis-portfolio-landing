import { Box, BoxProps, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
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
  ...measures.build()
}));
