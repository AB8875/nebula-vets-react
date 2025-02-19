import React from "react";
import SubHeading from "./SubHeading";
import Para from "./Para";

function SecSection({ title, para, para2 }) {
  return (
    <>
      <div>
        <SubHeading title={title} />
        <Para para={para} className={"mt-5"} />
        <Para para={para2} className={"mt-5"} />
      </div>
    </>
  );
}

export default SecSection;
