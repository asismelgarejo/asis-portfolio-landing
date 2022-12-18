import { Box, BoxProps, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measures = new WebsiteMeasureBuilder().mB().mT();
const measuresTitle = new WebsiteMeasureBuilder().mTitleB();
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
const measuresTitleT = new WebsiteMeasureBuilder().mTitleT();

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  ...measures.build(),
  ".TitleSection": {
    ...measuresTitle.build(),
  },
}));
export const Cards = styled(Box)<any>(({ theme }) => ({
  ...measuresTitleT.build(),
  display: "grid",
  height: "fit-content",
  gridTemplateColumns: "repeat(3, 1fr minmax(40px, auto)) 1fr",
  gridTemplateRows: "minmax(80px, auto)",
  rowGap: "40px",
  ...measuresTitleT.build(),
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

  ".Buttons": {
    display: "grid",
    gridTemplateColumns: "1fr minmax(30px, auto) 1fr",
    width: "100%",
  },
  ".Buttons .Button:nth-of-type(odd)": {
    gridColumn: "1 / 2",
  },
  ".Buttons .Button:nth-of-type(even)": {
    gridColumn: "3 / 4",
  },
}));
