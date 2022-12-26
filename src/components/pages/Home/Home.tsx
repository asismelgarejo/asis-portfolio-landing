import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeImage from "../../../assets/home.jpeg";
import { Container } from "./Home.styled";

export const Home = () => {
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  const showText = greaterOrEqualToSM;
  const showContactBtn = greaterOrEqualToSM;
  return (
    <Container className="p-t p-b">
      <Box  className="ImageContainer">

      <Image
        src="/home.png"
        alt="asis"
        width={500}
        height={800}
        className="Image"
      />
      </Box>
      <Box className="Content" component={Stack} spacing={2}>
        <Typography component="h1" variant="h2">
          Asis Melgarejo
        </Typography>
        <Typography component="h2" variant="h4">
          Full Stack Web and Mobile Developer
        </Typography>
        {showText && (
          <Typography component="p" variant="h5">
            As a full-stack developer I build Saas applications for the web and
            mobile environments.
          </Typography>
        )}
        <Stack spacing={1} direction="row" className="Buttons">
          <Button variant="contained" sx={{ width: "fit-content" }}>
            Download CV
          </Button>
          {showContactBtn && (
            <Button variant="outlined" sx={{ width: "fit-content" }}>
              Contact
            </Button>
          )}
        </Stack>
      </Box>
    </Container>
  );
};
