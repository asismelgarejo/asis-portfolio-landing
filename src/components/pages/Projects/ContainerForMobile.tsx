import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Project } from "@api/models";
import { ContainerMobile } from "./Projects.styled";
import { ProjectCard } from "./ProjectCard";

type ContainerForMobileProps = {
  projects: Project[];
};

export const ContainerForMobile: React.FC<ContainerForMobileProps> = ({
  projects,
}) => {
  return (
    <ContainerMobile className="m-t-t">
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={10}>
        {projects.map((p) => (
          <SwiperSlide key={p._id} className="SwiperSlide">
            <ProjectCard project={p} />
          </SwiperSlide>
        ))}
        <Box sx={{ height: 40 }} />
      </Swiper>
    </ContainerMobile>
  );
};
