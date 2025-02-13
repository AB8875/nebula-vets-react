import React from "react";

function Para({ para, className }) {
  return (
    <p
      class={`text-[#494336] text-sm sm:text-base md:text-xl !avanttTRIAL-Normal !leading-[130%]  ${className} `}
    >
      {para}
    </p>
  );
}

export default Para;
