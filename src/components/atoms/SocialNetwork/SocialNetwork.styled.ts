import { styled, Typography, TypographyProps } from "@mui/material";

export const SocialNetworkStyled = styled(
    Typography,
    {}
  )<TypographyProps>(({ theme }) => ({
    // margin: "0 20px",
    width: "3.75em",
    height: "3.75em",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontSize: "inherit",
    background: theme.palette.common.white,
    borderRadius: "50%",
    ".Item": {
      fontSize: "2em",
    },
  }));
  