import { useActiveSectionContext } from "@contexts/ActiveSectionContext";
import { getElementBoundaries } from "@toolbox/helpers";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const useActiveSection = (_id: string) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({});
  const { changeSections } = useActiveSectionContext();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (containerRef.current) {
        const { top, bottom } = getElementBoundaries(containerRef.current);
        if (latest + 70+64 > top && latest + 70+64 < bottom) {
          changeSections && changeSections(_id, { active: true, name: _id });
        } else
          changeSections && changeSections(_id, { active: false, name: _id });
      }
    });
  }, []);
  return { containerRef };
};
