import { v4 as uuidv4 } from "uuid";
import {
  Settings as SettingsIcon,
  AccountCircle as UserIcon,
  School as SchoolIcon,
  BusinessCenter as BagIcon,
  Code as CodeIcon,
  PermContactCalendar as ContactIcon,
} from "@mui/icons-material";

interface Link {
  _id: string;
  name: string;
  Icon: any;
  url: string;
}

export const LINKS: Link[] = [
  {
    _id: uuidv4(),
    name: "About me",
    Icon: UserIcon,
    url: "about-me",
  },
  {
    _id: uuidv4(),
    name: "Education & Certifications",
    Icon: SchoolIcon,
    url: "education-and-certifications",
  },
  {
    _id: uuidv4(),
    name: "Experience",
    Icon: BagIcon,
    url: "work-experience",
  },
  {
    _id: uuidv4(),
    name: "Skills",
    Icon: CodeIcon,
    url: "skills",
  },
  {
    _id: uuidv4(),
    name: "Projects",
    Icon: BagIcon,
    url: "projects",
  },
  {
    _id: uuidv4(),
    name: "Contact",
    Icon: ContactIcon,
    url: "contact",
  },
];
