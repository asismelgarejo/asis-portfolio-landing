import { MainLayout } from "@components/templates";
import { Stack, Typography } from "@mui/material";
// import styles from '../styles/Home.module.css'
import { BLOG_LINKS } from "@mocks/links";
import ConstructionIcon from "@mui/icons-material/Construction";
export default function Index() {
  return (
    <div>
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
    </div>
  );
}
