import { AppBar, Box, styled, BoxProps, AppBarProps } from "@mui/material";
import { LinkProps } from "next/link";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measures = new WebsiteMeasureBuilder().pL().pR();
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
type CustomAppBar = AppBarProps & { scrolled: boolean };
export const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<CustomAppBar>(({ theme, scrolled }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  ...measuresHeader.build(),
  backdropFilter: "blur(15px);",
  ...(scrolled
    ? {
        background: "rgba(41,41,41,.3)",
      }
    : {}),

  ".progress-bar": {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    height: "10px",
    background: theme.palette.error.main,
    transformOrigin: "0%",
  },
}));
export const CustomToolbar = styled(Box)(({ theme }) => ({
  height: "70px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  // ...measures.build(),
}));

export const Menus = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  height: "100%",
  display: "flex",
  alignItems: "center",
  ".Active": {
    background: theme.palette.secondary.main,
  },
  ".Menu": {
    padding: "0 1em",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

type MenuProps = BoxProps & {
  active: boolean;
} & LinkProps;

// export const Menu = styled(Box, {
//   shouldForwardProp: (prop) => prop !== "active",
// })<MenuProps>(({ theme, active }) => ({
//   padding: "0 1em",
//   height: "100%",
//   ...(active
//     ? {
//         background: theme.palette.secondary.main,
//       }
//     : {}),

// }));
