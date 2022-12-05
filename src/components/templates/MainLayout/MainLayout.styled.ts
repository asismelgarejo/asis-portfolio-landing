import { Box, BoxProps, styled } from "@mui/material";

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  backgroundImage: theme.palette.background.default,
}));
