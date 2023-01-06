import { v4 as uuidv4 } from "uuid";
import React from "react";
import { WorkExperience } from "@api/models";

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    _id: "63b79100b89b1af04d5c51ca",
    job: {
      _id: uuidv4(),
      role: ["Frontend Web Developer"],
      startDate: new Date(2021,5,1),
      endDate: new Date(2022,9,31),
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      _id: uuidv4(),
      image: {
        url: "/images/2myr.png",
        caption: ""
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
      startDate: new Date(2022,3,2),
      endDate: new Date(2023,9,2),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      _id: uuidv4(),
      image: {
        url: "/exp/freelance.png",
        caption: ""
      },
      name: "Freelance",
      website: "",
    },
  },
  // {
  //   _id: uuidv4(),
  //   job: {
  //     _id: uuidv4(),
  //     role: ["Software Engineer"],
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt.`,
  //   },
  //   company: {
  //     _id: uuidv4(),
  //     image: {
  //       url: "/exp/crunchyroll.png",
  //       caption: ""
  //     },
  //     name: "Crunchyroll",
  //     website: "",
  //   },
  // },
];
