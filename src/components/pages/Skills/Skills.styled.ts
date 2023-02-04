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

const getGrid = (length: number) => {
  let row = "";
  Array.from({ length: length - 1 }, (_) => {
    row += ` ${column} minmax(20px, auto)`;
  });
  row += ` ${column}`;
  return row;
};

type ContainerSkillsProps = BoxProps & {
  disabled: boolean;
};

export const ContainerSkills = styled(Box, {
  shouldForwardProp: (prop) => prop !== "disabled",
})<ContainerSkillsProps>(({ theme, disabled }) => ({
  display: "grid",
  ".Card": {
    opacity: disabled ? 0.3 : 1,
  },
  ".CardContent": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    "&:before": {
      content: "''",
      paddingTop: "100%",
    },
  },
  ".CardImage": {
    position: "absolute",
    width: "70%",
    height: "auto",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
  },
  ".Card:hover .CardDescription": {
    opacity: disabled ? 0.3 : 1,
  },
  ".CardDescription": {
    position: "absolute",
    background: theme.palette.error.dark,
    width: "100%",
    padding: "5px 10px",
    top: 0,
    left: 0,
    opacity: 0.3,
    transition: "background .3s",
  },
  gridTemplateColumns: getGrid(2),
  rowGap: "20px",
  ".Card:nth-of-type(2n+1)": {
    gridColumn: "1 / 2",
  },
  ".Card:nth-of-type(2n+2)": {
    gridColumn: "3 / 4",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: getGrid(4),
    rowGap: "24px",
    ".Card:nth-of-type(4n+1)": {
      gridColumn: "1 / 2",
    },
    ".Card:nth-of-type(4n+2)": {
      gridColumn: "3 / 4",
    },
    ".Card:nth-of-type(4n+3)": {
      gridColumn: "5 / 6",
    },
    ".Card:nth-of-type(4n+4)": {
      gridColumn: "7 / 8",
    },
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: getGrid(5),
    rowGap: "24px",
    ".Card:nth-of-type(5n+1)": {
      gridColumn: "1 / 2",
    },
    ".Card:nth-of-type(5n+2)": {
      gridColumn: "3 / 4",
    },
    ".Card:nth-of-type(5n+3)": {
      gridColumn: "5 / 6",
    },
    ".Card:nth-of-type(5n+4)": {
      gridColumn: "7 / 8",
    },
    ".Card:nth-of-type(5n+5)": {
      gridColumn: "9 / 10",
    },
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: getGrid(6),
    rowGap: "24px",
    ".Card:nth-of-type(6n+1)": {
      gridColumn: "1 / 2",
    },
    ".Card:nth-of-type(6n+2)": {
      gridColumn: "3 / 4",
    },
    ".Card:nth-of-type(6n+3)": {
      gridColumn: "5 / 6",
    },
    ".Card:nth-of-type(6n+4)": {
      gridColumn: "7 / 8",
    },
    ".Card:nth-of-type(6n+5)": {
      gridColumn: "9 / 10",
    },
    ".Card:nth-of-type(6n+6)": {
      gridColumn: "11 / 12",
    },
  },
}));

export const FormControls = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridAutorows: "auto",
  rowGap: "10px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "24px",
  }
}));
