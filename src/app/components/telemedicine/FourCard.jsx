import React from "react";
import Buttons from "../common/Buttons";
import { fourData } from "../helper/Helper";
import CommonCard from "./CommonCard";

function FourCard() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
        <div className="flex flex-wrap gap-5 justify-center">
          {fourData.map((item, index) => (
            <CommonCard
              key={index}
              heading={item.heading}
              subheading={item.subheading}
              para={item.para}
            />
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
