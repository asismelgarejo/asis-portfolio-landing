import { HolderAnchor } from "@components/atoms";
import { Divider, Typography } from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import React from "react";
import { Timeline } from "./Timeline";
import { Container } from "./WorkExperience.styled";

const WorkExperience = () => {
    const { containerRef } = useActiveSection("work-experience");

  return (
    <Container ref={containerRef}>
      <HolderAnchor _id="work-experience" />
      <Typography component="h2" variant="h2" className="TitleSection">
        Work Experience
      </Typography>
      <Divider />
      <Timeline />
    </Container>
  );
};
export default WorkExperience;
