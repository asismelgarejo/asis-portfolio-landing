import { Image } from './common';
export interface SkillModel {
  _id: string;
  name: string;
  image: Image;
  domain: number;
  description: string;
  // experience: WorkExperience[];
  // projects: Project[]
  // certifications: EducationAndCertification[]
  // description: string;
}