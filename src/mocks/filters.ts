import { AreaModel, AreaModes, LevelModel, LevelModes, SpecializationModes, SpecializationModel } from "@api/models";
import { v4 as uuidv4 } from "uuid";

export const LEVELS: LevelModel[] = [
  {
    _id: uuidv4(),
    name: "Expert",
    code: LevelModes.expert,
  },
  {
    _id: uuidv4(),
    name: "Proficient",
    code: LevelModes.proficient,
  },
  {
    _id: uuidv4(),
    name: "Competent",
    code: LevelModes.competent,
  },
  {
    _id: uuidv4(),
    name: "Advanced Beginner",
    code: LevelModes.advanced_beginner,
  },
  {
    _id: uuidv4(),
    name: "Novice",
    code: LevelModes.novice,
  },
];
export const AREAS: AreaModel[] = [
  {
    _id: uuidv4(),
    name: "Backend",
    code: AreaModes.backend,
  },
  {
    _id: uuidv4(),
    name: "Frontend",
    code: AreaModes.frontend,
  },
  {
    _id: uuidv4(),
    name: "DevOps",
    code: AreaModes.devops,
  },
  {
    _id: uuidv4(),
    name: "Mobile",
    code: AreaModes.mobile,
  },
  {
    _id: uuidv4(),
    name: "Database",
    code: AreaModes.databases,
  },
  {
    _id: uuidv4(),
    name: "Design",
    code: AreaModes.design,
  },
];
export const SPECIALIZATIONS: SpecializationModel[] = [
  {
    _id: uuidv4(),
    name: "React.js",
    code: SpecializationModes.reactjs,
  },
  {
    _id: uuidv4(),
    name: "Golang",
    code: SpecializationModes.golang,
  },
  {
    _id: uuidv4(),
    name: "C#",
    code: SpecializationModes.csharp,
  },
  {
    _id: uuidv4(),
    name: "PHP",
    code: SpecializationModes.php,
  },
  {
    _id: uuidv4(),
    name: "Java",
    code: SpecializationModes.java,
  },
];
