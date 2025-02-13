import Image from "next/image";
import React from "react";
import { AcoIcon } from "../helper/Icon";

function Aco6() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#494336]">
            Nutritional and Behavioral Guidance
          </h1>
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion6" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <p className="avanttTRIAL-Normal text-sm md:text-lg leading-[130%] text-black max-w-[1000px]">
            Our veterinarians understand the impact of nutrition and behavior on
            your pet's overall health. During the animal health check, we offer
            guidance on proper nutrition, diet choices, feeding schedules, and
            exercise routines. We also address behavioral concerns and provide
            recommendations to foster a harmonious bond between you and your
            pet.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>{" "}
    </>
  );
}

export default Aco6;
