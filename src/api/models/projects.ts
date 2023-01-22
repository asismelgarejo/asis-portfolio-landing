import { Image } from "./common";

export interface Project {
  name: string;
  tags: string[];
  description: string;
  repo: string;
  demo: string;
  image: Image;
  _id: string;
}
