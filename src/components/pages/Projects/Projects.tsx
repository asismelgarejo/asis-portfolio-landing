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
import { Cards, Container, ProjectCardStyled } from "./Projects.styled";

type ContainerForNoMobileProps = {
  projects: Project[];
};
const ContainerForNoMobile: React.FC<ContainerForNoMobileProps> = ({
  projects,
}) => {
  const projectsAnimation = {
    loading: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2, delay: 100 },
    },
    loaded: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const projectAnimation = {
    loading: {
      opacity: 0,
      x: -10,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 1 },
      },
    },
    loaded: {
      opacity: 1,
      x: 0,
      transition: {
        x: { stiffness: 1000 },
        opacity: { duration: 1 },
      },
    },
  };

  return (
    <motion.div
      initial="loading"
      whileInView="loaded"
      variants={projectsAnimation}
      style={{ width: "100%" }}
    >
      <Cards className="TitleSection m-t-t">
        {projects.map((p) => (
          <motion.div
            key={p._id}
            variants={projectAnimation}
            className="ProjectCardStyled"
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </Cards>
    </motion.div>
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
