import { HolderAnchor, SocialNetwork } from "@components/atoms";
import { SOCIAL_NETWORKS } from "@mocks/social-networks";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import { useLottie } from "lottie-react";
import React, { useEffect } from "react";
import { ContactForm, Container, Content, FormFields } from "./Contact.styled";
import RocketAnimation from "../../../../public/lotties/rocket_circle.json";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

type FormFields = {
  fullName: string;
  email: string;
  subject: string;
  description: string;
};
const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { containerRef } = useActiveSection("contact");
  const { View } = useLottie({
    animationData: RocketAnimation,
    loop: true,
    className: "LottieItem"
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      description: "",
    },
  });
  const onSubmit = handleSubmit(async (data: FormFields) => {
    console.log(data);
    enqueueSnackbar("Complete all the fields", {
      variant: "success",
      preventDuplicate: true,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
      },
    });
  });

  // useEffect(() => {}, [errors]);

  return (
    <Container ref={containerRef} className="p-t p-b">
      <HolderAnchor _id="contact" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Contact
      </Typography>
      <Content>
        <ContactForm component={Card} className="ContactForm">
          <CardContent>
            <Typography
              component="h4"
              variant="h4"
              sx={{ marginBottom: ".5em" }}
            >
              Get in touch with me filling the form and clicking the "SEND"
              button
            </Typography>
            <FormFields component="form" onSubmit={onSubmit}>
              <Controller
                name="fullName"
                control={control}
                rules={{
                  required: { value: true, message: "Este campo es requerido" },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Fullname"
                    value={value}
                    onChange={onChange}
                    error={!!errors?.fullName}
                    // helperText={errors.fullName?.message ?? ""}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: { value: true, message: "Este campo es requerido" },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Email"
                    value={value}
                    onChange={onChange}
                    error={!!errors?.email}
                    // helperText={errors.email?.message ?? ""}
                  />
                )}
              />
              <Controller
                name="subject"
                control={control}
                rules={{
                  required: { value: true, message: "Este campo es requerido" },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    name="subject"
                    variant="outlined"
                    placeholder="Subject"
                    value={value}
                    onChange={onChange}
                    error={!!errors?.subject}
                    // helperText={errors.subject?.message ?? ""}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Message..."
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Button
                variant="contained"
                type="submit"
                onClick={() => {
                  if (Object.keys(errors).length > 0) {
                    enqueueSnackbar("Complete all the fields", {
                      variant: "error",
                      preventDuplicate: true,
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                    });
                  }
                }}
              >
                Send
              </Button>
            </FormFields>
          </CardContent>
        </ContactForm>
        <Box
        className="Lottie"
        >
          {View}
        </Box>
      </Content>
    </Container>
  );
};
export default Contact;
