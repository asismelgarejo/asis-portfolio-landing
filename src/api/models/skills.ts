import { Image } from "./common";
import { EducationAndCertification } from "./education_and_certications";
import { Project } from "./projects";
import { WorkExperience } from "./work_experience";

export interface Skill {
    _id: string;
    name:  string;
    image: Image;
    domain: number;
    // experience: WorkExperience[];
    // projects: Project[]
    // certifications: EducationAndCertification[]
    // description: string;
}

/*

 */