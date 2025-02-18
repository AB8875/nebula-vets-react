import React from "react";
import SubHeading from "./SubHeading";
import Image from "next/image";
import Para from "./Para";

function SecSection({ title, para }) {
  return (
    <>
      <div>
        <SubHeading title={title} />
        <Para para={para} className={"mt-5"} />
      </div>
    </>
  );
}

export default SecSection;
