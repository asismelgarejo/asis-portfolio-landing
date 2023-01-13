import { documentsService } from "@api/repositories";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import HomeImage from "../../../assets/home.jpeg";
import { Container } from "./Home.styled";

export const Home = () => {
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  const showText = greaterOrEqualToSM;
  const showContactBtn = greaterOrEqualToSM;
  const pdfLinkRef = useRef<HTMLAnchorElement>(null);

  const getCV = async () => {
    alert("WORKING!S");
    const { binary, filename } = await documentsService.getCV();
    const file = new Blob([binary], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);

    // const pdfLinkRef = await document.createElement("a");
    // await pdfLinkRef.setAttribute("href", fileURL);
    // await pdfLinkRef.setAttribute("download", filename);
    // await pdfLinkRef.click();
     // const pdfLinkRef = await document.createElement("a");
    pdfLinkRef.current && pdfLinkRef.current.setAttribute("href", fileURL);
    pdfLinkRef.current && pdfLinkRef.current.setAttribute("download", filename);
    pdfLinkRef.current && pdfLinkRef.current.click();
    // document.body.removeChild(pdfLinkRef);
    alert("WORKING!F");
  };
  return (
    <Container className="p-t p-b">
      <a ref={pdfLinkRef} style={{ display: "none" }} />
      <Box className="ImageContainer">
        <Image
          src="/images/home.jpg"
          alt="asis"
          width={500}
          height={800}
          className="Image"
        />
      </Box>
      <Box className="Content" component={Stack} spacing={2}>
        <Typography component="h1" variant="h1">
          Asis Melgarejo
        </Typography>
        <Typography component="h2" variant="h3">
          Full Stack Web and Mobile Developer
        </Typography>
        {showText && (
          <Typography component="p" variant="h5">
            As a full-stack developer I build Saas applications for the web and
            mobile environments.
          </Typography>
        )}
        <Stack spacing={1} direction="row" className="Buttons">
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            onClick={async () => await getCV()}
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
