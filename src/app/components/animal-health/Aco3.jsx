import Image from "next/image";
import React from "react";
import { AcoIcon } from "../helper/Icon";

function Aco3() {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#494336]">
            Comprehensive Physical Examinations
          </h1>
          <span
            id="icon-accordion1"
            className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform"
          >
            <AcoIcon />
          </span>
        </div>

        <div id="accordion3" className="hidden pt-2 w-full text-[#D7D9DD] mt-6">
          <p className="avanttTRIAL-Normal text-sm md:text-lg leading-[130%] text-black max-w-[1000px]">
            Our skilled veterinarians perform thorough physical examinations
            during animal health checks, paying attention to your pet's overall
            appearance, body condition, vital signs, and specific areas of
            concern. We examine their eyes, ears, nose, mouth, teeth, skin,
            coat, muscles, joints, and abdomen, ensuring a comprehensive
            evaluation of their health.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
      </div>
    </>
  );
}

export default Aco3;
