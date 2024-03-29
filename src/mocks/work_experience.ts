import { v4 as uuidv4 } from "uuid";
import React from "react";
import { WorkExperience } from "@api/models";

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    _id: "63b79100b89b1af04d5c51ca",
    job: {
      _id: uuidv4(),
      role: ["Frontend Web Developer"],
      startDate: new Date(2021, 5, 1),
      endDate: new Date(2022, 9, 31),
      description:
        "Layout of components and pages using React.js and Typescript, integration of REST APIs using Axios and React Query, component layout for mobile development using Flutter.",
    },
    company: {
      _id: uuidv4(),
      image: {
        url: "/images/2myr.png",
        alt: "",
      },
      name: "2MYR S.A.C",
      website: "",
    },
  },
  {
    _id: uuidv4(),
    job: {
      _id: uuidv4(),
      role: ["Full Stack Developer"],
      startDate: new Date(2022, 3, 2),
      endDate: new Date(2023, 9, 2),
      description:
        "Component and page layout using React.js, development of microservices APIs using Nest.js, MongoDB and Redis, application deployment using EC2, Docker, NGINX and GitHub Actions.",
    },
    company: {
      _id: uuidv4(),
      image: {
        url: "/exp/freelance.png",
        alt: "",
      },
      name: "Freelance",
      website: "",
    },
  },
  {
    _id: uuidv4(),
    job: {
      _id: uuidv4(),
      role: ["Full Stack Developer"],
      startDate: new Date(2023, 3, 15),
      endDate: new Date(2023, 11, 1),
      description:
        "Creation of new REST and socket API endpoints using existing SQL Server Stored procedures and MongoDB. Refactorization of existing codebase with clean code and dependency injection patterns. Integration of existing back-end endpoints using React. Adding offline functionality for a react-based PWA.Refactorization of existing code base using clean code principles.",
    },
    company: {
      _id: uuidv4(),
      image: {
        url: "/images/cobraperu.png",
        alt: "",
      },
      name: "Cobra Perú",
      website: "",
    },
  },
];
