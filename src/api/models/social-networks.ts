import { ICONS } from "@toolbox/constants/icons";

export type SOCIAL_NETWORK = {
  name: string;
  icon: keyof typeof ICONS;
  _id: string;
  link: string;
};
