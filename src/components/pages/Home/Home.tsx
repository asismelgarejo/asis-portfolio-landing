import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import Link from "next/link";
import { Container } from "./Home.styled";
import { useLottie } from "lottie-react";
import HomeAnimation from "../../../../public/lotties/home.json";
import { useEffect, useState } from "react";
// import { useCV } from "@hooks/cv.hooks";
import { useSnackbar } from "notistack";
import { saveVisit, useCV } from "src/hooks";
import { useTypedAnimation } from "src/hooks/typed-animation";

export const Home = () => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const visitMutation = saveVisit();
  const cvMutation = useCV({
    onSuccess({ data }) {
      const file = new Blob([data.binary], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      try {
        const pdfLinkRef = document.createElement("a");
        pdfLinkRef.setAttribute("href", fileURL);
        pdfLinkRef.setAttribute("download", data.filename);
        pdfLinkRef.click();
      } catch (e: any) {
        throw new Error(e?.message);
      }
      enqueueSnackbar("CV downloaded", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 1200,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    },
    onError(error) {
      enqueueSnackbar(error?.message, {
        variant: "error",
        preventDuplicate: false,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    },
  });
  const { containerRef } = useActiveSection("about-me");

  const text = useTypedAnimation({
    texts: [
      "Typescript developer",
      "Java Developer",
      "Go Developer",
      "Full Stack Web and Mobile Developer",
    ],
  });
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  const showText = greaterOrEqualToSM;
  const showContactBtn = greaterOrEqualToSM;
  const { View } = useLottie({
    animationData: HomeAnimation,
    loop: true,
    className: "Lottie",
  });

  useEffect(() => {
    visitMutation.mutate();
  }, []);
  return (
    <Container className="p-t p-b" ref={containerRef}>
      <Box className="ImageContainer">{View}</Box>
      <Box className="Content" component={Stack} spacing={2}>
        <Typography component="h1" variant="h1">
          Asis Melgarejo
        </Typography>
        <Typography component="h2" variant="h3">
          {text}&ensp;
        </Typography>
        {showText && (
          <Typography component="p" variant="h5">
            I'm a software engineer specilized in web and mobile development
            from Peru 🇵🇪.
          </Typography>
        )}
        <Stack spacing={1} direction="row" className="Buttons">
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            onClick={() => cvMutation.mutate()}
            disabled={cvMutation.isLoading}
          >
            Download CV
          </Button>
          {showContactBtn && (
            <Button
              variant="outlined"
              sx={{ width: "fit-content" }}
              component={Link}
              href={"#contact"}
            >
              Contact
            </Button>
          )}
        </Stack>
      </Box>
    </Container>
  );
};
