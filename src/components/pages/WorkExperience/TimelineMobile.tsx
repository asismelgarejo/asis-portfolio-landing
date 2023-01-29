import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { WorkExperience } from "@api/models";
import { ContainerMobile } from "./WorkExperience.styled";
import { red } from "@mui/material/colors";
import { WorkExperienceCard } from "./WorkExperienceCard";
import Image from "next/image";

type TimelineMobileProps = {
  work_experiences: WorkExperience[];
};

export const TimelineMobile: React.FC<TimelineMobileProps> = ({
  work_experiences,
}) => {
  return (
    <ContainerMobile className="m-t-t">
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={10}>
        {work_experiences.map((we) => (
          <SwiperSlide key={we._id} className="SwiperSlide">
            <Card>
              <CardContent sx={{ textAlign: "left" }} className="CardWE">
                <Stack
                  className="Inner"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    className="Image"
                    alt={we.company.image.alt}
                    src={we.company.image.url}
                    width={100}
                    height={100}
                  />
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 400, textAlign: "center", marginTop: ".5em" }}
                  >
                    {we.company.name}
                  </Typography>
                </Stack>
                <Box sx={{ gridColumn: "3 / -1", textAlign: "left" }}>
                  <WorkExperienceCard job={we.job} />{" "}
                </Box>
              </CardContent>
              {/* <CardContent
                sx={{ gridColumn: "3 / -1",textAlign: "left" }}
              >
              </CardContent> */}
            </Card>
          </SwiperSlide>
        ))}
        <Box sx={{ height: 40 }} />
      </Swiper>
    </ContainerMobile>
  );
};
