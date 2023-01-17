import { Box, BoxProps, styled } from "@mui/material";
import { getBoxModel, WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  ...getBoxModel(theme).padding.pL().pR().build(),
  [theme.breakpoints.up("sm")]: {
    ...getBoxModel(theme).padding.pL(0).pR(0).build(),
  },
}));

const column = "1fr";

type ContainerSkillsProps = BoxProps;
const borderRadius = 4;
export const ContainerSkills = styled(Box, {
  shouldForwardProp: (prop) => prop !== "itemsLength",
})<ContainerSkillsProps>(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "20px",
  // ".SkillImage": {
  //   width: "100%",
  //   height: "auto",
  //   maxWidth: "100px"
  // },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: `${column} minmax(40px, auto) ${column}`,
    ".Table:nth-of-type(odd)": {
      gridColumn: "1 / 2",
    },
    ".Table:nth-of-type(even)": {
      gridColumn: "3/ -1",
    },
  },
  ".CardContent": {
    height: "100%",
    width: "100%",
    background: "#17192C",
    // padding: "1em",
    borderRadius: borderRadius,
  },

  ".SkillImage": {
    width: "100%",
    maxWidth: "100px",
    height: "auto"
  },
  ".Table": {
    borderCollapse: "separate",
    borderSpacing: "0 1em",
    width: "100%",
    height: "fit-content"
  },
  ".Table tbody tr:nth-of-type(2n+1)": {
    cursor: "pointer",
    transition: "box-shadow .2s",
    borderRadius: borderRadius,
    overflow: "hidden",
  },
  // HOVER
  ".Table tbody tr:nth-of-type(2n+1):hover": {
    boxShadow: `0px 4px 5px 2px rgba(0,0,0,.4)`,
    // boxShadow: `0 0 10px 2px ${theme.palette.error.dark}`,
    // boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
    // boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    // boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    // boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    // boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
  },
  ".Table  tbody tr:nth-of-type(2n+1) td": {
    // borderTop: `1px solid ${theme.palette.error.dark}`,
    // borderBottom: `1px solid ${theme.palette.error.dark}`,
  },
  ".Table  tbody  tr:nth-of-type(2n+1) td:first-of-type": {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    // borderLeft: `1px solid ${theme.palette.error.dark}`,
    padding: ".5em 1em",
    // minWidth: "200px",
  },
  ".Table  tbody tr:nth-of-type(2n+1) td:last-of-type": {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    // borderRight: `1px solid ${theme.palette.error.dark}`,
  },
}));

type SkillStatsProps = BoxProps & {
  scale: number;
};
export const SkillStats = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "scale",
})<SkillStatsProps>(({ theme, scale }) => ({
  height: "30px",
  background: theme.palette.grey[600],
  width: "100%",
  // "&:before": {
  //   content: "''",
  //   width: `calc(100% * ${scale})`,
  //   height: "100%",
  //   background: theme.palette.info.main,
  //   display: "block",
  // },
}));
