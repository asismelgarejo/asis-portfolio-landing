import { v4 as uuidv4 } from "uuid";
import { EducationAndCertification } from "@api/models";

export const EDUCATION_AND_CERTIFICATIONS: EducationAndCertification[] = [
  {
    _id: uuidv4(),
    title: "System Engineering",
    image: {
      label: "UNJSC",
      url: "/images/unjfsc_logo.png",
    },
    start_date: new Date(2018, 9, 2),
    end_date: new Date(2023, 11, 29),
  },
  {
    _id: "63b78e487abfe21f6bb6c13e",
    title: "AWS Certified Cloud Practitioner",
    image: {
      label: "AWS Certified Cloud Practitioner",
      url: "/certs/aws-cloud-practitioner.png",
    },
    end_date: new Date(2023, 9, 1),
  },
];
