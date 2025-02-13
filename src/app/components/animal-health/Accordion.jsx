import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { AcoIcon } from "../helper/Icon";

function Accordion() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <SubHeading
            title={"Early Detection and Prevention"}
            className={
              "roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%]"
            }
          />
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion1" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <Para
            para={
              "Regular health checks are essential for detecting and preventing potential health issues before they become more serious. By identifying subtle changes in your pet's health, we can address them promptly, potentially saving them from discomfort, pain, and costly treatments in the long run."
            }
            className={"text-sm lg:text-lg text-black max-w-[1000px]"}
          />
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>
    </>
  );
}

export default Accordion;
