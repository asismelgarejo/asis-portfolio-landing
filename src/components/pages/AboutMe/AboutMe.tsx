import { HolderAnchor } from "@components/atoms";
import { useActiveSectionContext } from "@contexts/ActiveSectionContext";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import Image from "next/image";
import React from "react";
import { Container, ContainerContent } from "./AboutMe.styled";

const AboutMe = () => {
  const { containerRef } = useActiveSection("about-me");

  return (
    <Container ref={containerRef} className="p-t p-b">
      <HolderAnchor _id="about-me" />
      <Typography component="h2" variant="h2" className="Title m-b-t">
        About me
      </Typography>
      <Divider />
      <ContainerContent  className="m-t-t">
        <Box className="Content" component={Stack} spacing={2}>
          <Typography component="h3" variant="h3">
            I'm a software engineer specilized in web and mobile development
            from Peru 🇵🇪.
          </Typography>
          <Box>
            <Typography component="p" variant="body1">
              I work building sass apps mainly for medium and big companies
              contributing to the project's success.
            </Typography>
            <Typography component="p" variant="body1">
              I work building sass apps mainly for medium and big companies
              contributing to the project's success. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec bibendum cursus auctor. Integer
              mattis lacus vel ligula sagittis, quis egestas ligula accumsan. Ut
              nec quam ut orci ultrices laoreet. Nullam tempus at orci in
              commodo.
            </Typography>
          </Box>
        </Box>
        <Box className="ImageContainer" component="figure">
          <Image
            src="/images/aboutme.jpeg"
            alt="asis"
            width={500}
            height={800}
            className="Image"
          />
        </Box>
      </ContainerContent>
    </Container>
  );
};
export default AboutMe;
