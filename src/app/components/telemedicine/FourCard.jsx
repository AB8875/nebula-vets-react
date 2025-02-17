import React from "react";
import Buttons from "../common/Buttons";
import { fourData } from "../helper/Helper";

function FourCard() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
        <div className="flex flex-wrap gap-5 justify-center">
          {fourData.map((item, index) => (
            <div
              key={index}
              className="bg-[#494336] max-w-[310px] h-[420px] sm:h-[465px] px-8   "
            >
              <h1 className="text-[138px] avanttTRIAL-Normal bg-[linear-gradient(180deg,#FFA280_0%,#8FD9CB_100%)] bg-clip-text text-transparent">
                {item.heading}
              </h1>
              <div className="max-w-[240px] pb-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#D7D9DD] avanttTRIAL-Normal">
                  {item.subheading}
                </h2>
                <p className="text-sm sm:text-xl md:text-xl text-[#D7D9DD] leading-[130%] mt-6  ">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 sm:mt-20 group flex justify-center">
          <Buttons path={"/"} button={"CHAT WITH A VET"} />
        </div>
      </div>
    </>
  );
}

export default FourCard;
