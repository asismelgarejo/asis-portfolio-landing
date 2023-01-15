import { documentsService } from "@api/repositories";
import { HolderAnchor } from "@components/atoms";
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
import { useCV } from "src/hooks";

export const Home = () => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

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
  const [text, setText] = useState("");
  const [fullText] = useState("   Full Stack Web and Mobile Developer   ");
  const [index, setIndex] = useState(2);
  const [loop, setLoop] = useState({ reverse: false, goal: fullText.length });
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  const showText = greaterOrEqualToSM;
  const showContactBtn = greaterOrEqualToSM;
  const { View } = useLottie({
    animationData: HomeAnimation,
    loop: true,
    className: "Lottie",
  });

  // const getCV = async () => {
  //   // alert("WORKING!S");
  //   const { binary, filename } = await documentsService.getCV();
  //   const file = new Blob([binary], { type: "application/pdf" });
  //   const fileURL = URL.createObjectURL(file);

  //   try{
  //     const pdfLinkRef = document.createElement("a");
  //     pdfLinkRef.setAttribute("href", fileURL);
  //     pdfLinkRef.setAttribute("download", filename);
  //     pdfLinkRef.click();
  //   }catch(e){
  //     console.log("")
  //   }
  //   // pdfLinkRef.current && pdfLinkRef.current.setAttribute("href", fileURL);
  //   // pdfLinkRef.current && pdfLinkRef.current.setAttribute("download", filename);
  //   // pdfLinkRef.current && pdfLinkRef.current.click();
  //   // document.body.removeChild(pdfLinkRef);
  //   alert("WORKING!F");
  // };

  useEffect(() => {
    // if (index < fullText.length) {
    const myTimeout = setTimeout(() => {
      let nI = index;
      let t = text;
      setText(fullText.slice(0, nI));
      // else setReverse(false);
      if (loop.reverse) nI--;
      else nI++;
      setIndex(nI);
      if (nI === loop.goal) {
        setLoop({
          reverse: !loop.reverse,
          goal: loop.goal === 0 ? fullText.length : 0,
        });
      }
    }, 60);
    return () => clearTimeout(myTimeout);
  }, [index]);

  return (
    <Container className="p-t p-b" ref={containerRef}>
      <Box className="ImageContainer">
        {View}
        {/* <Image
          src="/images/home.jpg"
          alt="asis"
          width={500}
          height={800}
          className="Image"
        /> */}
      </Box>
      <Box className="Content" component={Stack} spacing={2}>
        <Typography component="h1" variant="h1">
          Asis Melgarejo
        </Typography>
        <Typography component="h2" variant="h3">
          {text}&ensp;
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
            onClick={() => cvMutation.mutate()}
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
