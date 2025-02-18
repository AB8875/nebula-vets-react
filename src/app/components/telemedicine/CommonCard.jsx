import React from "react";

function CommonCard({ heading, subheading, para }) {
  return (
    <>
      <div className="bg-[#494336] max-w-[310px] h-[420px] sm:h-[465px] px-8   ">
        <h1 className="text-[138px] avanttTRIAL-Normal bg-[linear-gradient(180deg,#FFA280_0%,#8FD9CB_100%)] bg-clip-text text-transparent">
          {heading}
        </h1>
        <div className="max-w-[240px] pb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#D7D9DD] avanttTRIAL-Normal">
            {subheading}
          </h2>
          <p className="text-sm sm:text-xl md:text-xl text-[#D7D9DD] leading-[130%] mt-6  ">
            {para}
          </p>
        </div>
      </div>
    </>
  );
}

export default CommonCard;
