import { Image } from "./common";
import { AreaModel, LevelModel, SpecializationModel } from "./filters";
export interface SkillModel {
  _id: string;
  name: string;
  image: Image;
  description: string;
  level: LevelModel;
  areas: AreaModel[];
  specializations: SpecializationModel[];
}

export type SkillParams = {
  levels?: string[];
  areas?: string[];
  specializations?: string[];
  name?: string;
};
