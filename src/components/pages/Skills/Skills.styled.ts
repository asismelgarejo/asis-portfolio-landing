import { Box, BoxProps, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
// const measures = new WebsiteMeasureBuilder().mB().mT();
// const measuresTitle = new WebsiteMeasureBuilder().mTitleB();
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
// const measuresTitleT = new WebsiteMeasureBuilder().mTitleT();
// const BASE_SIZE = "33%";
export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  // ...measures.build(),
  ".TitleSection": {
    // ...measuresTitle.build(),
  },
}));

const column = "1fr";
// const column =
//   "minmax(20px, auto) minmax(10px, auto) 1fr 10px minmax(20px, auto)";

type ContainerSkillsProps = BoxProps;
type GridPlace = {
  gridColumn: string;
  gridRow: string;
};

const getPositionInGrid = (length: number): Record<string, GridPlace> => {
  return Array.from({ length }).reduce((prev: any, next, superIdx) => {
    const r = Array.from({ length: 5 }).reduce((p: any, n, idx) => {
      const base = superIdx * 3 + 1;

      const isFourth = (idx === 3) as boolean;
      const isFifth = idx === 4;
      // const isEigth = idx === 8;
      // const isNineth = idx === 9;

      const condition = (isFourth || isFifth) as boolean;;
      // const condition = isFourth || isFifth || isEigth || isNineth;

      const greaterThan4 = (idx > 4) as boolean;
      let column = greaterThan4 ? idx - 2 : (idx as number);
      if (isFourth) column = 0;
      if (isFifth) column = 1;
      // if (isEigth) column = 3;
      // if (isNineth) column = 4;

      const row = condition ? base + 1 : base;
      return {
        ...p,
        [`.Generic:nth-child(${superIdx * 5 + idx + 1})`]: {
          gridRow: `${row} / ${row + 1}`,
          gridColumn: `${column * 2 + 1} / ${column * 2 + 2}`,
        },
      };
    }, {}) as Record<string, GridPlace>;
    return { ...prev, ...r };
  }, {}) as Record<string, GridPlace>;
};
export const ContainerSkills = styled(Box, {
  shouldForwardProp: (prop) => prop !== "itemsLength",
})<ContainerSkillsProps>(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `${column} minmax(40px, auto) ${column}`,
  // ...measuresTitleT.build(),
  rowGap: "20px",
  ".SkillImage": {
    width: "100%",
    height: "auto",
    maxWidth: "100px"
  },
}));

type SkillStatsProps = BoxProps & {
  scale: number;
  color: string;
};
export const SkillStats = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "scale",
})<SkillStatsProps>(({ theme, scale, color }) => ({
  height: "30px",
  background: theme.palette.grey[600],
  "&:before": {
    content: "''",
    width: `calc(100% * ${scale})`,
    height: "100%",
    background: theme.palette.info.main,
    display: "block",
  },
}));


type SkillLoteProps = BoxProps & {
  itemsLength: number;
};

const getRowsPattern = (l: number) => {
  const length = l - 1;
  return Array.from({ length }).reduce((p, n, idx) => {
    p += "auto minmax(0px, auto) 20px ";
    if (idx === length - 1) p += "auto minmax(0px, auto)";
    return p;
  }, "") as string;
};

const columnBatch =
  "minmax(20px, auto) minmax(10px, auto) 1fr 10px minmax(20px, auto)";
export const SkillLote = styled(Box, {
  shouldForwardProp: (prop) => prop !== "itemsLength",
})<SkillLoteProps>(({ theme, itemsLength }) => ({
  width: "100%",
  display: "grid",
  alignItems: "center",
  height: "fit-content",
  gridTemplateColumns: columnBatch,
  gridTemplateRows: getRowsPattern(itemsLength),
  ...getPositionInGrid(itemsLength),
  "&:nth-of-type(odd)":{
    gridColumn: "1 / 2"
  },
  "&:nth-of-type(even)":{
    gridColumn: "3 / -1"
  },
  ".Collapse":{
    paddingTop: "15px"
  }
}));
