import {
  SkillModel,
  LevelModel,
  AreaModel,
  SpecializationModel,
} from "@api/models";

export type PageHomeProps = {
  data: {
    levels: LevelModel[];
    areas: AreaModel[];
    specializations: SpecializationModel[];
  };
};
