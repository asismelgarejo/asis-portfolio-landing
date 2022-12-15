import { Skill } from "@api//models/skills";
import { v4 as uuidv4 } from "uuid";

export const SKILLS: Skill[] = [
  {
    _id: uuidv4(),
    name: "React.js",
    image: {
      url: "dasdasd",
      caption: "react.js",
    },
    domain: 0.7,
  },
  {
    _id: uuidv4(),
    name: "GraphQL",
    image: {
      url: "dasdasd",
      caption: "react.js",
    },
    domain: 0.2,
  },
  {
    _id: uuidv4(),
    name: "JavaScript",
    image: {
      url: "dasdasd",
      caption: "react.js",
    },
    domain: 0.8,
  },
  {
    _id: uuidv4(),
    name: "Bash",
    image: {
      url: "dasdasd",
      caption: "react.js",
    },
    domain: 0.1,
  },
  {
    _id: uuidv4(),
    name: "MongoDB",
    image: {
      url: "dasdasd",
      caption: "react.js",
    },
    domain: 0.5,
  },
];
