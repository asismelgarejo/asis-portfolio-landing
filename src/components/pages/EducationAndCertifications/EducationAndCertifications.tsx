import { HolderAnchor } from "@components/atoms";
import { EDUCATION_AND_CERTIFICATIONS } from "@mocks/education_and_certications";
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Container, Docs, CardDoc } from "./EducationAndCertifications.styled";
import { motion } from "framer-motion";
import { useActiveSection } from "@toolbox/hooks";
import { CardForMobile } from "./CardForMobile";
import { CardDocument } from "./CardDocument";

const CardForNoMobile = () => {
  const certifications = {
    loading: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    loaded: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const certification = {
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
      variants={certifications}
    >
      <Docs className="m-t-t">
        {EDUCATION_AND_CERTIFICATIONS.map((doc) => (
          <motion.div
            key={doc._id}
            variants={certification}
            className="CardDocument"
          >
            <CardDoc>
              <CardDocument doc={doc} />
            </CardDoc>
          </motion.div>
        ))}
      </Docs>
    </motion.div>
  );
};

const EducationAndCertifications = () => {
  const { containerRef } = useActiveSection("education-and-certifications");
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container ref={containerRef} className="p-t p-b">
      <HolderAnchor _id="education-and-certifications" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Education & Certifications
      </Typography>
      <Box  className="Divider">
        <Divider/>
      </Box>
      {!greaterOrEqualToSM && (
        <CardForMobile docs={EDUCATION_AND_CERTIFICATIONS} />
      )}
      {greaterOrEqualToSM && <CardForNoMobile />}
    </Container>
  );
};
export default EducationAndCertifications;
