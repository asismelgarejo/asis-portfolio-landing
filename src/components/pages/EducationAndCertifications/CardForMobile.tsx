import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { EducationAndCertification } from "@api/models";
import { CardDocument } from "./CardDocument";
import { CardDoc, ContainerMobile } from "./EducationAndCertifications.styled";

type CardForMobileProps = {
  docs: EducationAndCertification[];
};

export const CardForMobile: React.FC<CardForMobileProps> = ({ docs }) => {
  return (
    <ContainerMobile className="m-t-t">
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={10}>
        {docs.map((doc) => (
          <SwiperSlide key={doc._id} className="SwiperSlide">
            <CardDoc>
              <CardDocument doc={doc} />
            </CardDoc>
          </SwiperSlide>
        ))}
        <Box sx={{ height: 40 }} />
      </Swiper>
    </ContainerMobile>
  );
};
