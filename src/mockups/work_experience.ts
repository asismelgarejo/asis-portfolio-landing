import { v4 as uuidv4 } from "uuid";
import React from "react";
import { WorkExperience } from "@api//models";

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    _id: uuidv4(),
    job: {
      _id: uuidv4(),
      role: ["Full Stack Developer"],
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
];
