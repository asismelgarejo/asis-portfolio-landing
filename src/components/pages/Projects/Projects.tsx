import { Project } from "@api/models/projects";
import { HolderAnchor } from "@components/atoms";
import { PROJECTS } from "@mocks/projects";

import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import { useSpreadCardAnimations } from "@toolbox/hooks";
import { motion } from "framer-motion";
import React from "react";
import { ContainerForMobile } from "./ContainerForMobile";
import { ProjectCard } from "./ProjectCard";
import { Cards, Container } from "./Projects.styled";

type ContainerForNoMobileProps = {
  projects: Project[];
};
const ContainerForNoMobile: React.FC<ContainerForNoMobileProps> = ({
  projects,
}) => {
  const { cards } = useSpreadCardAnimations();
  return (
    <Cards
      component={motion.div}
      initial="loading"
      whileInView="loaded"
      variants={cards}
      className="TitleSection m-t-t"
    >
      {projects.map((p) => (
        <ProjectCard key={p._id} project={p} />
      ))}
    </Cards>
  );
};

const Projects = () => {
  const { containerRef } = useActiveSection("projects");
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container ref={containerRef} className="p-t p-b">
      <HolderAnchor _id="projects" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Projects
      </Typography>
      <Box className="Divider">
        <Divider />
      </Box>
      {!greaterOrEqualToSM && <ContainerForMobile projects={PROJECTS} />}
      {greaterOrEqualToSM && <ContainerForNoMobile projects={PROJECTS} />}
    </Container>
  );
};
export default Projects;
