import { Box, BoxProps, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measures = new WebsiteMeasureBuilder().mB().mT();
const measuresTitle = new WebsiteMeasureBuilder().mTitleB();
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  ...measures.build(),
  ".TitleSection":{
    ...measuresTitle.build()
  }
}));
