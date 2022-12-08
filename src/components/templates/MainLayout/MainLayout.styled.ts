import { Box, BoxProps, styled } from "@mui/material";
import { template } from "src/toolbox";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: theme.palette.background.default,
}));
export const Children = styled(Box)<BoxProps>(({ theme }) => ({
  // minHeight: "1000px",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridAutoRows: "auto",
  columnGap: "10px",
  ...template.paddings,
}));
