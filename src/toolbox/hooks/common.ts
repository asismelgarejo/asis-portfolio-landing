import { useActiveSectionContext } from "@contexts/ActiveSectionContext";
import { getElementBoundaries } from "@toolbox/helpers";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const useActiveSection = (_id: string) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({});
  const { changeSections } = useActiveSectionContext();
  const placeholder = measuresHeader.build().height as number;
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (containerRef.current) {
        const { top, bottom } = getElementBoundaries(containerRef.current);
        if (latest +  placeholder > top && latest + placeholder <= bottom) {
          changeSections && changeSections(_id, { active: true, name: _id });
        } else
          changeSections && changeSections(_id, { active: false, name: _id });
      }
    });
  }, []);
  return { containerRef };
};
