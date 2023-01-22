import { Project } from "@api/models/projects";
export const PROJECTS: Project[] = [
  {
    _id: "63cd6432ba1acccb491b4672",
    name: "Vaccionation System",
    tags: ["Graphql", "PostsgreSQL", "Node.js", "Redis"],
    description:
      "A system where a citizen can verify their vaccines and where nurses or other authorized health professionals can register new ones.",
    repo: "https://github.com/asismelgarejo/vaccination-system-frontend",
    demo: "https://vaccination-system-frontend.vercel.app/",
    image: {
      url: "/images/vs_home.png",
      caption: "vaccionation system home",
    },
  },
];
