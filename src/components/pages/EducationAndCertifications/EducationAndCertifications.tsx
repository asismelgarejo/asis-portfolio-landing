import { EducationAndCertification } from "@api//models";
import { HolderAnchor } from "@components/atoms";
import { EDUCATION_AND_CERTIFICATIONS } from "@mockups/education_and_certications";
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Container, Docs, CardDoc } from "./EducationAndCertifications.styled";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useActiveSection } from "@toolbox/hooks";

type CardDocumentProps = Omit<EducationAndCertification, "_id">;
const CardDocument: React.FC<CardDocumentProps> = ({
  image,
  title,
  start_date,
  end_date,
}) => (
  <CardDoc>
    <Image height={100} width={100} src={image.url} alt={image.label} />
    <Stack spacing={2}>
      <Typography>{title}</Typography>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>{format(start_date, "yyyy")}</Typography>
        <Box>-</Box>
        <Typography>{format(end_date, "yyyy")}</Typography>
      </Stack>
    </Stack>
  </CardDoc>
);

const EducationAndCertifications = () => {
  const { containerRef } = useActiveSection("education-and-certifications");


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
    <Box ref={containerRef}>
      <HolderAnchor _id="education-and-certifications" />
      <Typography component="h2" variant="h2">
        Education & Certifications
      </Typography>
      <Docs
        component={motion.div}
        initial="loading"
        whileInView="loaded"
        variants={certifications}
      >
        {EDUCATION_AND_CERTIFICATIONS.map(({ _id, ...eac }) => (
          <motion.div
            key={_id}
            variants={certification}
            className="CardDocument"
          >
            <CardDocument {...eac} />
          </motion.div>
        ))}
      </Docs>
    </Box>
  );
};
export default EducationAndCertifications;
