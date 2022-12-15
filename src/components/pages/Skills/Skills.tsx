import { HolderAnchor } from "@components/atoms";
import { Divider, Typography } from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import React from "react";
import { Container } from "./Skills.styled";

const Skills = () => {
  const { containerRef } = useActiveSection("skills");

  return (
    <Container ref={containerRef}>
      <HolderAnchor _id="skills" />
      <Typography component="h2" variant="h2" className="TitleSection">
        Skills
      </Typography>
      <Divider />
    </Container>
  );
};
export default Skills;
