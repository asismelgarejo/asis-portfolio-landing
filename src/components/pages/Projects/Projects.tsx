import { HolderAnchor } from "@components/atoms";
import { Divider, Typography } from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import React from "react";
import { Container } from "./Projects.styled";

const Projects = () => {
  const { containerRef } = useActiveSection("projects");

  return (
    <Container ref={containerRef}>
      <HolderAnchor _id="projects" />
      <Typography component="h2" variant="h2" className="TitleSection">
        Projects
      </Typography>
      <Divider />
    </Container>
  );
};
export default Projects;
