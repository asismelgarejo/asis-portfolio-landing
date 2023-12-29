import { Project } from "@api/models/projects";
export const PROJECTS: Project[] = [
  {
    _id: "63cd6432ba1acccb491b4672",
    name: "Vaccination System",
    tags: ["Graphql", "PostsgreSQL", "Node.js", "Redis"],
    description:
      "A system where a citizen can verify their vaccines and where nurses or other authorized health professionals can register new ones.",
    repo: "https://github.com/asismelgarejo/vaccination-system-frontend",
    demo: "https://vaccination-system-frontend.vercel.app/",
    image: {
      url: "/images/vs_home.png",
      alt: "vaccionation system home",
    },
  },
  {
    _id: "63cd6432ba1acccb491b4662",
    name: "Ordering System",
    tags: [
      "AWS Lambda",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Typescript",
      "Next.js",
    ],
    description:
      "An ordering system designed as a technical test for the Full Stack Junior Position",
    repo: "https://github.com/asismelgarejo/client-fractal-ordering-system",
    demo: "https://client-fractal-ordering-system.vercel.app/",
    image: {
      url: "/images/client-fractal-ordering-system.vercel.app_add-order_657fbf3e98b7e85cde9dd6a8.png",
      alt: "Ordering System home",
    },
  },
  {
    _id: "63cd6432ba1acccb59174662",
    name: "SIGO",
    tags: ["Lit Element", "JavaScript", "WebSockets"],
    description:
      "System designed mainly for handling human, material and ordering resources.",
    repo: "",
    demo: "https://appsigo.com/",
    disabled: true,
    image: {
      url: "/images/appsigo.com_.png",
      alt: "appsigo.com_.png",
    },
  },
  {
    _id: "63cd6432ba1acccb59174662",
    name: "Personal Portfolio",
    tags: ["Next.js", "Nest.js", "MongoDB", "AWS Lambda"],
    description:
      "Personal portfolio intended to show my experience and skills-",
    repo: "https://github.com/asismelgarejo/asis-portfolio-landing",
    demo: "https://asis-portfolio-landing.vercel.app/",
    image: {
      url: "/images/asis-portfolio-landing.vercel.app_.png",
      alt: "asis-portfolio-landing.vercel.app",
    },
  },
  {
    _id: "63cd6432ba1acccb59174668",
    name: "Movie Microservices",
    tags: ["Golang", "TDD", "MySQL", "Docker"],
    description:
      "Microservices built with Golang and DDD patterns.",
    repo: "https://github.com/asismelgarejo/movieexample-microservices/tree/develop",
    demo: "",
    image: {
      url: "/images/golang_movie.jpeg",
      alt: "golang_movie.jpeg",
    },
  },
];
