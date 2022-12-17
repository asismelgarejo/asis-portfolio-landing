import { Skill } from "@api//models/skills";
import { v4 as uuidv4 } from "uuid";

export const SKILLS: Skill[] = [
  {
    _id: uuidv4(),
    name: "React.js",
    image: {
      url: "/icons/reactjs.svg",
      caption: "React.js",
    },
    domain: 0.7,
    color: "#00D8FF"
  },
  {
    _id: uuidv4(),
    name: "Nest.js",
    image: {
      url: "/icons/nestjs.svg",
      caption: "Nest.js",
    },
    domain: 0.4,
    color: "#EA2845"
  },
  {
    _id: uuidv4(),
    name: "Postman.js",
    image: {
      url: "/icons/postman.svg",
      caption: "Postman",
    },
    domain: 0.4,
    color: "#FF6C37"
  },
  {
    _id: uuidv4(),
    name: "Bash",
    image: {
      url: "/icons/bash.svg",
      caption: "Bash",
    },
    domain: 0.2,
    color: "#000"
  },
  {
    _id: uuidv4(),
    name: "Typscript",
    image: {
      url: "/icons/ts.svg",
      caption: "Typescript",
    },
    domain: 0.7,
    color: "#3178C6"
  },
  {
    _id: uuidv4(),
    name: "Golang",
    image: {
      url: "/icons/golang.svg",
      caption: "Golang",
    },
    domain: 0.4,
    color: "#00ACD7"
  },
  {
    _id: uuidv4(),
    name: "AWS Lambda",
    image: {
      url: "/icons/awslambda.svg",
      caption: "AWS Lambda",
    },
    domain: 0.1,
    color: "#F58534"
  },
  {
    _id: uuidv4(),
    name: "CSS3",
    image: {
      url: "/icons/css3.svg",
      caption: "CSS3",
    },
    domain: 0.8,
    color: "#2965F1"
  },
  {
    _id: uuidv4(),
    name: "Dart",
    image: {
      url: "/icons/dart.svg",
      caption: "Dart",
    },
    domain: 0.3,
    color: "#00C4B3"
  },
  {
    _id: uuidv4(),
    name: "Docker",
    image: {
      url: "/icons/docker.svg",
      caption: "Docker",
    },
    domain: 0.5,
    color: "#1396C3"
  },
  {
    _id: uuidv4(),
    name: "MongoDB",
    image: {
      url: "/icons/mongodb.svg",
      caption: "MongoDB",
    },
    domain: 0.5,
    color: "#6CAC48"
  },
  {
    _id: uuidv4(),
    name: "MySQL",
    image: {
      url: "/icons/mysql.svg",
      caption: "MySQL",
    },
    domain: 0.2,
    color: "#0A517D"
  },
  {
    _id: uuidv4(),
    name: "Node.js",
    image: {
      url: "/icons/nodejs.svg",
      caption: "Node.js",
    },
    domain: 0.6,
    color: "#8CC84B"
  },
  {
    _id: uuidv4(),
    name: "PostgreSQL",
    image: {
      url: "/icons/postgresql.svg",
      caption: "PostgreSQL",
    },
    domain: 0.2,
    color: "#336791"
  },
  {
    _id: uuidv4(),
    name: "GraphQL",
    image: {
      url: "/icons/graphql.svg",
      caption: "GraphQL",
    },
    domain: 0.4,
    color: "#E10098"
  },
];
