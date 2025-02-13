import React from "react";

function SubHeading({ title, className }) {
  return (
    <h1
      className={`text-[#494336] avanttTRIAL-Normal text-2xl sm:text-3xl md:text-4xl  ${className} `}
    >
      {title}
    </h1>
  );
}

export default SubHeading;
