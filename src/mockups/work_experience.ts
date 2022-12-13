import { v4 as uuidv4 } from "uuid";
import React from "react";
import { WorkExperience } from "@api//models";

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    _id: uuidv4(),
    job: {
      role: "Full Stack Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      image: "/images/2myr.png",
      name: "2MYR S.A.C",
    },
  },
  {
    _id: uuidv4(),
    job: {
      role: "Full Stack Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      image: "/images/2myr.png",
      name: "2MYR S.A.C",
    },
  },
  {
    _id: uuidv4(),
    job: {
      role: "Full Stack Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      image: "/images/2myr.png",
      name: "2MYR S.A.C",
    },
  },
  {
    _id: uuidv4(),
    job: {
      role: "Full Stack Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      image: "/images/2myr.png",
      name: "2MYR S.A.C",
    },
  },
  {
    _id: uuidv4(),
    job: {
      role: "Full Stack Developer",
      startDate: new Date(),
      endDate: new Date(),
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.`,
    },
    company: {
      image: "/images/2myr.png",
      name: "2MYR S.A.C",
    },
  },
];
