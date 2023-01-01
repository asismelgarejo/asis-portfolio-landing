import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import { CardContainer, CardInfo, Container } from "./Timeline.styled";
import Image from "next/image";
import { WORK_EXPERIENCES } from "src/mocks/work_experience";
import { WorkExperienceCard } from "./WorkExperienceCard";

export const Timeline = () => {
  return (
    <Container className="m-t-t">
      <Box>
        {WORK_EXPERIENCES.map((we) => (
          <CardContainer key={we._id} className="CardContainer">
            <CardInfo
              className="CardInfo"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Stack
                className="Inner"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  className="Image"
                  alt={we.company.image.caption}
                  src={we.company.image.url}
                  width={100}
                  height={100}
                />
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontWeight: 400, textAlign: "center" }}
                >
                  {we.company.name}
                </Typography>
              </Stack>
            </CardInfo>
            <Box className="Connection" />
            <Card sx={{ height: "fit-content", maxWidth: "400px" }}>
              <CardContent>
                <WorkExperienceCard job={we.job} />
              </CardContent>
            </Card>
          </CardContainer>
        ))}
      </Box>
    </Container>
  );
};
