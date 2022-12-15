import { HolderAnchor } from "@components/atoms";
import { Divider, Typography } from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import React from "react";
import { Container } from "./Contact.styled";

const Contact = () => {
  const { containerRef } = useActiveSection("contact");

  return (
    <Container ref={containerRef}>
      <HolderAnchor _id="contact" />
      <Typography component="h2" variant="h2" className="TitleSection">
        Contact
      </Typography>
      <Divider />
    </Container>
  );
};
export default Contact;
