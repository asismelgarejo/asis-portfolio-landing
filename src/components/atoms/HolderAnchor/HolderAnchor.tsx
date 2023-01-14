import React from "react";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
const headeheight = new WebsiteMeasureBuilder().headerHeight().build().height as number;

export const HolderAnchor: React.FC<{_id: string}> = ({_id}) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <span
        id={_id}
        style={{
          position: "absolute",
          top: `-${headeheight+10}px`,
        }}
      ></span>
    </div>
  );
};
