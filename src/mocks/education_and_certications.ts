import { v4 as uuidv4 } from "uuid";
import { EducationAndCertification } from "@api//models";

export const EDUCATION_AND_CERTIFICATIONS: EducationAndCertification[] = [
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(2018, 9, 2),
    end_date: new Date(2023, 1, 1),
  },
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(),
    end_date: new Date(),
  },
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(),
    end_date: new Date(),
  },
];
