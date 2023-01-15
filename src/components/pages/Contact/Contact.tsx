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
import React, { useEffect, useState } from "react";
import { ContactForm, Container, Content, FormFields } from "./Contact.styled";
import RocketAnimation from "../../../../public/lotties/rocket_circle.json";
import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useMutationEmail } from "src/hooks/email.hooks";
import { EmailPost } from "@api/models";

type EmailPayload = EmailPost;

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { containerRef } = useActiveSection("contact");
  const [defaultValues] = useState<EmailPayload>({
    fullname: "",
    email: "",
    subject: "",
    description: "",
  });
  const emailMutation = useMutationEmail({
    onSuccess(data) {
      reset({...defaultValues, email: getValues("email")})
      enqueueSnackbar("Email was sent successfully", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    },
    onError(error) {
      enqueueSnackbar(error?.message ?? "", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    },
  });
  const [makeValidation, setMakeValidation] = useState(false);
  const { View } = useLottie({
    animationData: RocketAnimation,
    loop: true,
    className: "LottieItem",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<EmailPayload>({
    defaultValues,
  });
  const onSubmit = async (data: EmailPayload) => {
    emailMutation.mutate(data);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      enqueueSnackbar("Complete all the fields", {
        variant: "error",
        preventDuplicate: false,
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    }
  }, [makeValidation, errors]);

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
            <FormFields component="form" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="fullname"
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
                    error={!!errors?.fullname}
                    // helperText={errors.fullname?.message ?? ""}
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
                    type="email"
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
                rules={{
                  required: { value: true, message: "Este campo es requerido" },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    variant="outlined"
                    multiline
                    name="description"
                    rows={4}
                    placeholder="Message..."
                    value={value}
                    onChange={onChange}
                    error={!!errors?.description}
                  />
                )}
              />
              <Button
                variant="contained"
                type="submit"
                onClick={() => setMakeValidation((prev) => !prev)}
                disabled={emailMutation.isLoading}
              >
                Send
              </Button>
            </FormFields>
          </CardContent>
        </ContactForm>
        <Box className="Lottie">{View}</Box>
      </Content>
    </Container>
  );
};
export default Contact;
