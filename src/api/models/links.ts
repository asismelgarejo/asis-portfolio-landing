import { ICONS } from "@toolbox/constants/icons";

export interface Link {
  _id: string;
  name: string;
  icon: keyof typeof ICONS;
  url: string;
}
