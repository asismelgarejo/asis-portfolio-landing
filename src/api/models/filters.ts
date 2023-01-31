export enum LevelModes {
  expert = "expert",
  proficient = "proficient",
  competent = "competent",
  advanced_beginner = "advanced_beginner",
  novice = "novice",
}
export enum AreaModes {
  backend = "backend",
  frontend = "frontend",
  devops = "devops",
  databases = "databases",
  mobile = "mobile",
  design = "design",
}
export enum SpecializationModes {
  reactjs = "reactjs",
  java = "java",
  golang = "golang",
  csharp = "csharp",
  php = "php",
}

export interface LevelModel {
  _id: string;
  name: string;
  code: LevelModes;
}
export interface AreaModel {
  _id: string;
  name: string;
  code: AreaModes;
}
export interface SpecializationModel {
  _id: string;
  name: string;
  code: SpecializationModes;
}
