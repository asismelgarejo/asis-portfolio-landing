import { ICONS } from "@toolbox/constants/icons";

export const getIcon = (icon: keyof typeof ICONS) => {
  const Icon = ICONS[icon];
  if (!Icon) return ICONS.BlogIcon;
  return Icon;
};
