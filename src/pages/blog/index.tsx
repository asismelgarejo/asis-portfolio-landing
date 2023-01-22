import { MainLayout } from "@components/templates";
import { Stack, Typography } from "@mui/material";
import { ActiveSectionContextProvider } from "@contexts/ActiveSectionContext";
import { BLOG_LINKS } from "@mocks/links";
import ConstructionIcon from "@mui/icons-material/Construction";
export default function Index() {
  return (
    <ActiveSectionContextProvider>
      <MainLayout links={BLOG_LINKS}>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ height: "100%" }}
        >
          <ConstructionIcon sx={{ fontSize: "10em" }} />
          <Typography variant="h1">The Blog isn't ready yet </Typography>
        </Stack>
      </MainLayout>
    </ActiveSectionContextProvider>
  );
}
