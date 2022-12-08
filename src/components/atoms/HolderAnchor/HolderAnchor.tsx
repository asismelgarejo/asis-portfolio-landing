import React from "react";

export const HolderAnchor: React.FC<{_id: string}> = ({_id}) => {
  return (
    <h3
      style={{
        position: "relative",
      }}
    >
      <span
        id={_id}
        style={{
          position: "absolute",
          top: "-120px",
        }}
      ></span>
    </h3>
  );
};
