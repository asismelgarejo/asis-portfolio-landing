import { HolderAnchor } from "@components/atoms";
import { WORK_EXPERIENCES } from "@mocks/work_experience";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import React from "react";
import { Timeline } from "./Timeline";
import { TimelineMobile } from "./TimelineMobile";
import { Container } from "./WorkExperience.styled";

const WorkExperience = () => {
  const { containerRef } = useActiveSection("work-experience");
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container ref={containerRef} className="p-t p-b">
      <HolderAnchor _id="work-experience" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Work Experience
      </Typography>
      <Box className="Divider">
        <Divider />
      </Box>
      {!greaterOrEqualToSM && (
        <TimelineMobile work_experiences={WORK_EXPERIENCES} />
      )}
      {greaterOrEqualToSM && <Timeline />}
    </Container>
  );
};
export default WorkExperience;
