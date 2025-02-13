import React from "react";

function Heading({ title, className }) {
  return (
    <h1
      className={`text-[#D7D9DD] avanttTRIAL-Normal max-w-[250px] sm:max-w-none leading-[110%] text-[35px] sm:text-[40px] md:text-[47px] lg:text-[52px] xl:text-[70px]    ${className}  `}
    >
      {title}
    </h1>
  );
}

export default Heading;
