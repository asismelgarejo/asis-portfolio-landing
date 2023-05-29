import { Image } from "./common";

export interface WorkExperience {
  _id: string;
  job: Job;
  company: Company;
}
export interface Company {
  image: Image;
  name: string;
  website: string;
  _id: string;
}
export interface Job {
  role: string[];
  startDate: Date;
  endDate?: Date;
  description: string;
  _id: string;
}
