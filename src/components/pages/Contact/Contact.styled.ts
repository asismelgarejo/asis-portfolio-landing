import { Box, BoxProps, styled } from "@mui/material";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
// const measures = new WebsiteMeasureBuilder().mB().mT();
// const measuresTitle = new WebsiteMeasureBuilder().mTitleB(10);
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: `calc(100vh - ${measuresHeader.build().height}px)`,
  // ...measures.build(),
  display: "flex",
  flexDirection:"column",
  padding: "6em 0",
}));
export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  border: `4px solid ${theme.palette.grey[500]}`,
  // padding: "1em",
  width: "100%",
  flexGrow: 1,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "4px",
  background: theme.palette.grey[500],
}));
export const ContactInfo = styled(Box)<BoxProps>(({ theme }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  ".TitleSection":{
    // ...measuresTitle.build(),
  },
  ".SocialNetworks":{
    background: theme.palette.background.default,
    minHeight: "100px",
    maxHeight: "fit-content",
    width: "100%",
    marginTop: "auto",
    // flexGrow: 1
  }

}));
export const ContactForm = styled(Box)<BoxProps>(({ theme }) => ({
  background: theme.palette.background.paper,
}));
export const FormFields = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: "1em",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(20px, auto)",
  rowGap: "20px",
}));
