import React from "react";

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
          top: "-120px",
        }}
      ></span>
    </div>
  );
};
