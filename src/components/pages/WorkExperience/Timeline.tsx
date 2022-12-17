import { Box, Card, CardContent, Typography } from "@mui/material";
import * as format from "date-fns";
import * as locale from "date-fns/locale";
import { CardContainer, CardInfo, Container } from "./Timeline.styled";
import Image from "next/image";
import { WORK_EXPERIENCES } from "src/mocks/work_experience";

export const Timeline = () => {
  return (
    <Container>
      <Box>
      {WORK_EXPERIENCES.map((c) => (
        <CardContainer key={c._id} className="CardContainer">
          <CardInfo
            className="CardInfo"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Image className="Image" alt={c.company.image.caption} src={c.company.image.url} width={100} height={100}/>
            <Typography variant="h6" component="h6">
              {c.company.name}
            </Typography>
          </CardInfo>
          <Box className="Connection"/>
          <Card sx={{height: "fit-content", maxWidth: "400px"}}>
            <CardContent>
              <Typography variant="h6" component="h6">
                {c.job.role}
              </Typography>
              <Typography variant="caption" component="span">
                {format.format(c.job.startDate, "MMMM yyyy", {
                  locale: locale.es,
                }).toUpperCase()}
              </Typography>
              <Typography variant="body2" component="p">
                {c.job.description}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      ))}
      </Box>
    </Container>
  );
};
