import { HolderAnchor, SocialNetwork } from "@components/atoms";
import { SOCIAL_NETWORKS } from "@mocks/social-networks";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import Image from "next/image";
import React from "react";
import {
  ContactForm,
  ContactInfo,
  Container,
  Content,
  FormFields,
} from "./Contact.styled";

const Contact = () => {
  const { containerRef } = useActiveSection("contact");

  return (
    <Container ref={containerRef}>
      <HolderAnchor _id="contact" />
      <Content component={Card}>
        <ContactInfo>
          <CardContent>
            <Typography component="h2" variant="h2" className="TitleSection">
              Contact
            </Typography>
            <Divider />
          </CardContent>
          <CardContent
            component={Stack}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/mailbox.png"
              alt="mailbox"
              height={200}
              width={200}
              style={{
                margin: "auto",
                width: "150px",
                height: "auto"
              }}
            />
          </CardContent>
          <Box className="SocialNetworks">
            <CardContent>
              <Typography
                component="h4"
                variant="h4"
                sx={{ marginBottom: ".5em" }}
              >
                Social Networks
              </Typography>
              <Stack direction="row" spacing={4}>
                {SOCIAL_NETWORKS.map(({ Icon, ...i }) => (
                  <SocialNetwork key={i._id}>
                    <Icon className="Item" />
                  </SocialNetwork>
                ))}
              </Stack>
            </CardContent>
          </Box>
        </ContactInfo>
        <ContactForm>
          <CardContent>
            <Typography
              component="h4"
              variant="h4"
              sx={{ marginBottom: ".5em" }}
            >
              Get in touch with me filling the form and clicking "SEND" button
            </Typography>
            <FormFields>
              <TextField size="small" variant="outlined" placeholder="Fullname"/>
              <TextField size="small" variant="outlined"  placeholder="Email"/>
              <TextField size="small" variant="outlined"  placeholder="Subject"/>
              <TextField size="small" variant="outlined" multiline rows={4}  placeholder="Message..."/>
              <Button variant="contained">Send</Button>
            </FormFields>
          </CardContent>
        </ContactForm>
      </Content>
    </Container>
  );
};
export default Contact;
