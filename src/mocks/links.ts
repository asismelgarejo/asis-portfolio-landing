import { v4 as uuidv4 } from "uuid";
import { Link } from "@api/models";
import { ICONS } from "@toolbox/constants/icons";

export const PAGE_LINKS: Link[] = [
  {
    _id: uuidv4(),
    name: "Home",
    icon: "UserIcon",
    url: "/",
  },
  {
    _id: uuidv4(),
    name: "Blog",
    icon: "BlogIcon",
    url: "blog",
  },
]

export const LINKS: Link[] = [
  {
    _id: uuidv4(),
    name: "About me",
    icon: "UserIcon",
    url: "about-me",
  },
  {
    _id: uuidv4(),
    name: "Education & Certifications",
    icon: "SchoolIcon",
    url: "education-and-certifications",
  },
  {
    _id: uuidv4(),
    name: "Experience",
    icon: "BagIcon",
    url: "work-experience",
  },
  {
    _id: uuidv4(),
    name: "Skills",
    icon: "CodeIcon",
    url: "skills",
  },
  {
    _id: uuidv4(),
    name: "Projects",
    icon: "BagIcon",
    url: "projects",
  },
  {
    _id: uuidv4(),
    name: "Contact",
    icon: "ContactIcon",
    url: "contact",
  },
];
