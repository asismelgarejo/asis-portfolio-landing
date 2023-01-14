import { BoxProps, styled, Box } from "@mui/material";

export const SocialNetworkStyled = styled(
  Box,
  {}
)<BoxProps>(({ theme }) => ({
  // margin: "0 20px",
  width: "3.75em",
  height: "3.75em",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  fontSize: "inherit !important",
  background: theme.palette.common.white,
  borderRadius: "50%",
  ".Item": {
    fontSize: "2em",
  },
}));
