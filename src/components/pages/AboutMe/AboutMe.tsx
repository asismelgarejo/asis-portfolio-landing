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
      <ContainerContent className="m-t-t">
        <Box className="Content" component={Stack} spacing={2}>
          {/* <Typography component="h3" variant="h3">
            I'm a software engineer specilized in web and mobile development
            from Peru 🇵🇪.
          </Typography> */}
          <Box>
            {/* <Typography component="p" variant="body1">
              I work building sass apps mainly for medium and big companies
              contributing to the project's success.
            </Typography> */}
            <Typography component="p" variant="body1">
              I've been working in web and mobile development for at least two
              years. Currently I course the 9th grade of system engineering.
            </Typography>
            <br />
            <Typography component="p" variant="body1">
              As a seasoned developer, I bring a wealth of experience
              participating in the development of a diverse array of projects.
              From crafting intuitive intranets to optimizing e-commerce
              platforms, designing engaging landing pages, and contributing to
              the robust functionality of ERPs, my journey has been marked by
              versatility and a commitment to delivering impactful solutions.
              With a proven track record across various domains, I thrive on
              tackling challenges and bringing innovative ideas to life. My
              passion lies in creating seamless, user-centric experiences that
              make a lasting impact. Ready to contribute my skills and expertise
              to new and exciting ventures.
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
